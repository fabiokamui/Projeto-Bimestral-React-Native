// SearchComponent.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchComponent = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  input: {
    fontSize: 16,
  },
});

export default SearchComponent;
