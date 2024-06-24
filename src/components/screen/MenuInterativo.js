import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuInterativo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Dicas" onPress={() => navigation.navigate('Dicas')} style={styles.button} />
      <Button title="Observações" onPress={() => navigation.navigate('Observacoes')} style={styles.button} />
      <Button title="Objetivos" onPress={() => navigation.navigate('Objetivos')} style={styles.button} />
      <Button title="Segredos" onPress={() => navigation.navigate('Segredos')} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    borderRadius: 50, // para criar uma forma de gota de chuva
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default MenuInterativo;
