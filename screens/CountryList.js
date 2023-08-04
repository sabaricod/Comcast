import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CountryListItem = React.memo(({ country, onPress }) => (
  <TouchableOpacity style={styles.countryItem} onPress={() => onPress(country)}>
    <Text style={styles.countryName}>{country.name.common}</Text>
  </TouchableOpacity>
), (prevProps, nextProps) => {
  // Use a custom shouldComponentUpdate to prevent unnecessary re-renders
  return prevProps.country.cca3 === nextProps.country.cca3;
});

const CountryList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countrydata= await response.json();
      setCountries(countrydata);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const filterCountries = useMemo(() => {
    if (!searchQuery) return countries;
    return countries.filter((country) => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, countries]);

  const handleCountryPress = useCallback((country) => {
    navigation.navigate('CountryDetails', { country });
  }, [navigation]);

  const keyExtractor = useCallback((item) => item.cca3, []);

  const renderItem = useCallback(({ item }) => (
    <CountryListItem country={item} onPress={handleCountryPress} />
  ), [handleCountryPress]);

  const getItemLayout = useCallback((_, index) => ({
    length: 60, // Adjust the length based on your item height
    offset: 60 * index,
    index,
  }), []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Country"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filterCountries}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  countryItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CountryList;
