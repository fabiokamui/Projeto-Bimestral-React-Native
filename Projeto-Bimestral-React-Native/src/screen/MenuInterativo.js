import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DicasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Dicas</Text>
    </View>
  );
};

const ObservacoesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Observações</Text>
    </View>
  );
};

const ObjetivosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Objetivos</Text>
    </View>
  );
};

const SegredosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Segredos</Text>
    </View>
  );
};

const App = () => {
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

export default App;
