import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const ListaDeAmigos = () => {
  const amigos = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
    { id: '5', nome: 'Carlos' },
    { id: '6', nome: 'Laura' },
  ];

  const renderAmigo = ({ item }) => (
    <View style={styles.amigo}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Amigos</Text>
      <FlatList
        data={amigos}
        renderItem={renderAmigo}
        keyExtractor={item => item.id}
        style={styles.lista}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lista: {
    flex: 1,
  },
  amigo: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ListaDeAmigos;
