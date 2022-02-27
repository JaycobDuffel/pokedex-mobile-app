import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Card from './src/components/card';
import SearchBar from './src/components/SearchBar';

export default function App() {

  return (
    <View style={styles.center}>
      <SearchBar />
      <Card pokemon="Breloom" type="grass" sprite={''}/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>

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
