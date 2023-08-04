import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetailsScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.countryName}>{country.name.common}</Text>
      <Text style={styles.countryProperty}>Capital: {country.capital}</Text>
      <Text style={styles.countryProperty}>Population: {country.population}</Text>
      <Text style={styles.countryProperty}>Region: {country.region}</Text>
      <Text style={styles.countryProperty}>Subregion: {country.subregion}</Text>
      <Text style={styles.countryProperty}>Currency: {Object.values(country.currencies).join(', ')}</Text>
      <Text style={styles.countryProperty}>Languages: {Object.values(country.languages).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  countryProperty: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CountryDetailsScreen;
