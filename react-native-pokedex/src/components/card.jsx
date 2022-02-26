import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const Card = () => {

  return (
    <View style={styles.card, styles.grass }>
      <Image source={require('../../assets/breloom.png')}/>
      <Text style={styles.text}>Or does it expect something here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000'
  },

  grass: {
    backgroundColor: '#228B22',
  },

});

export default Card;