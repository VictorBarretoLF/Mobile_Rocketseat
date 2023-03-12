import { StyleSheet } from 'react-native';
import { cores } from '../../stilos';

/* 
    Export a function that takes two arguments: pequeno (a boolean that determines if the button is small) 
    and invertido (a boolean that determines if the button color is inverted).
*/ 

export default (pequeno, invertido) => StyleSheet.create({
  // Define styles for the button container.
  botao: {
    // Set the width of the container.
    width: 140,
    // Set the padding of the container.
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    // Set the background color of the container.
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    // Add a shadow to the container.
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Define styles for the button text.
  title: {
    // Set the font weight of the text.
    fontWeight: 'bold',
    // Center the text horizontally.
    textAlign: 'center',
    // Set the text color based on the invertido prop.
    color: invertido ? cores.roxo : cores.laranja,
  }
});