import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";


const Card = () => {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.card, styles.fighting}>
      <View style={styles.container}>
        <Text style={styles.text}>Torchic</Text>
        <View style={styles.container}>
        <Image style={styles.sprite} source={require('../../assets/zoroark.png')}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  round: {
    borderWidth: 1,
    borderColor: '#a0d7A0',
  },

  text: {
    color: '#fff',
    marginBottom: 44,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: 'Montserrat'
  },
  
  container: {
    paddingHorizontal: 40,
    paddingTop:4,
    paddingBottom: 24,
    flex: 0,
    alignItems: 'center',
  },

  grass: {
    backgroundColor: '#78C850',
    borderWidth: 1,
    borderColor: '#a0d7A0',
    color: '#233923',
    borderRadius: 20
  },

  fire: {
    backgroundColor: '#F08030',
    borderColor: '#512424',
    borderWidth: 1,
    color: '#233923',
    borderRadius: 20
  },  
  
  ice: {
    backgroundColor: '#98D8D8',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  water: {
    backgroundColor: '#6890F0',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  electric: {
    backgroundColor: '#F8D030',
    color: '#716E13',
    borderColor: '#716E13',
    borderWidth: 1,
    borderRadius: 20,
  },

  poison: {
    backgroundColor: '#A040A0',
    color: '#603361',
    borderColor: '#603361',
    borderWidth: 1,
    borderRadius: 20,
  },

  psychic: {
    backgroundColor: '#F85888',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  dark: {
    backgroundColor: '#705848',
    borderColor: '#3A363A',
    borderWidth: 1,
    borderRadius: 20,
  },

  fighting: {
    backgroundColor: '#C03028',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  ghost: {
    backgroundColor: '#705898',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  normal: {
    backgroundColor: '#A8A878',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  ground: {
    backgroundColor: '#E0C068',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

    rock: {
    backgroundColor: '#705898',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  fairy: {
    backgroundColor: '#EE99AC',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  flying: {
    backgroundColor: '#A890F0',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  bug: {
    backgroundColor: '#B8B8D0',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  dragon: {
    backgroundColor: '#7038F8',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  steel: {
    backgroundColor: '#B8B8D0',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,
  },

  sprite: {
    position: "absolute",
    flex:0,
    alignContent: 'center',
    alignItems: 'center',
    bottom: -12,
  }

});

export default Card;