import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/card';

export default function App() {

  return (
    <View style={styles.center}>
      <Card pokemon="Breloom" type="grass" sprite={''}/>
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
