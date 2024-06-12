import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowColor: 'blue', // cor da sombra
    textShadowOffset: { width: 0, height: 2 }, // offset da sombra
    textShadowRadius: 4, // raio da sombra
  },
});

export default CadastroScreen;
