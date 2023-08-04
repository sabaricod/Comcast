// components/SearchBar.js
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        placeholder="Search country..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
