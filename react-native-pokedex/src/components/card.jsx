import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Card = () => {

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
    color: '#233923',
    marginBottom: 44,
    fontSize: 24,
    fontWeight: "bold",
  },
  
  container: {
    paddingHorizontal: 40,
    paddingTop:4,
    paddingBottom: 24,
    flex: 0,
    alignItems: 'center',
  },

  grass: {
    backgroundColor: '#228b22',
    borderWidth: 1,
    borderColor: '#a0d7A0',
    color: '#233923',
    borderRadius: 20
  },

  fire: {
    backgroundColor: '#f47174',
    borderColor: '#512424',
    borderWidth: 1,
    color: '#233923',
    borderRadius: 20
  },  
  
  ice: {
    backgroundColor: '#add8e6',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,

  },

  water: {
    backgroundColor: '#73C6FA',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,

  },

  electric: {
    backgroundColor: '#FFF58A',
    color: '#716E13',
    borderColor: '#716E13',
    borderWidth: 1,
    borderRadius: 20,

  },

  poison: {
    backgroundColor: '#C4A9CE',
    color: '#603361',
    borderColor: '#603361',
    borderWidth: 1,
    borderRadius: 20,

  },

  psychic: {
    backgroundColor: '#B6A9CE',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,

  },

  dark: {
    backgroundColor: '#A29EA9',
    color: '#3A363A',
    borderColor: '#3A363A',
    borderWidth: 1,
    borderRadius: 20,

  },

  fighting: {
    backgroundColor: '#D4BEA7',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,

  },

  water: {
    backgroundColor: '#73C6FA',
    color: '#243051',
    borderColor: '#243051',
    borderWidth: 1,
    borderRadius: 20,

  },

  water: {
    backgroundColor: '#73C6FA',
    color: '#243051',
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