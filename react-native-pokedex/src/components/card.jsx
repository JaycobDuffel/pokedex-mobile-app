import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Card = () => {

  return (
    <View style={styles.card, styles.round}>
      <View style={styles.container}>
        <Image style={styles.sprite} source={require('../../assets/breloom.png')}/>
        <Text style={styles.text}>Breloom</Text>
        <Text style={styles.text}>#238</Text>
        <Text style={styles.text}>Grass / Fighting</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
  },

  round: {
    borderWidth: 1,
    borderColor: '#A0D7A0',
    borderRadius: 8,
    backgroundColor: '#228B22',
  },

  text: {
    color: '#fff'
  },
  
  container: {
    paddingHorizontal: 32,
    paddingVertical: 48
  },

  grass: {
    backgroundColor: '#228B22',
  },

  sprite: {
    position: "absolute",
    flex:0,
    alignContent: 'center',
    alignItems: 'center',
    top: -50,
    shadowRadius:25
  }

});

export default Card;