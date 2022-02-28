import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { SearchContext } from './src/components/Context';
import Card from './src/components/card';
import SearchBar from './src/components/SearchBar';

export default function App() {

  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <View style={styles.center}>
        <SearchBar />
        <Card pokemon="Breloom" type="grass" sprite={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png'} />
        <StatusBar style="auto" />
      </View>
    </SearchContext.Provider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
