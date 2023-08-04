// components/CountryItem.js
import React from 'react';
import { View, Text } from 'react-native';

const CountryItem = ({ country }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text>{country.name.common}</Text>
      <Text>{country.region}</Text>
    </View>
  );
};

export default CountryItem;
