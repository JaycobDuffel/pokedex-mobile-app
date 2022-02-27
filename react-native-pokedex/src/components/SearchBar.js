import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
    console.log(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        style={styles.searchBar}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 10,
  },
  view: {
    position: 'absolute',
    top: Constants.statusBarHeight,
    borderRadius: 10,
    width: '90%',
    margin: 10,
  },
});

export default Searchbar;