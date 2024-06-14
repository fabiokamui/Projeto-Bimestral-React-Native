import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const SeguidoresScreen = () => {
  
  const seguidores = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
    { id: '5', nome: 'Carlos' },
    { id: '6', nome: 'Laura' },
  ];

  
  const renderSeguidor = ({ item }) => (
    <View style={styles.seguidor}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Seguidores</Text>
      <FlatList
        data={seguidores}
        renderItem={renderSeguidor}
        keyExtractor={(item) => item.id}
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
  seguidor: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SeguidoresScreen;