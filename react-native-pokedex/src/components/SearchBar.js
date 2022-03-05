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
        placeholder="Search..."
        onChangeText={updateSearch}
        value={search}
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  searchBarInput: {
    backgroundColor: '#e8e8e8',
  },
  view: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '95%',
    margin: 10,
  },
});

export default Searchbar;