import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao Drizzle</Text>
      <Button
        title='Tela de Login'
        onPress={() => navigation.navigate('TelaDeLogin')}
      />
      <Button
        title='Cadastro Usuário'
        onPress={() => navigation.navigate('CadastroUsuario')}
      />
      <Button
        title='Lista de Amigos'
        onPress={() => navigation.navigate('ListaDeAmigos')}
      />
      <Button
        title='Publicação'
        onPress={() => navigation.navigate('Publicacao')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
