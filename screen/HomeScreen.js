
// HomeScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PostComponent from './PostCompent';
import SearchComponent from './SearchComponent';

const HomeScreen = () => {
  const handlePostPress = () => {
    // Ação ao pressionar uma postagem
    console.log('Post pressionado');
  };

  const handleSearchChange = (text) => {
    // Ação ao alterar o texto da pesquisa
    console.log('Texto da pesquisa alterado:', text);
  };

  return (
    <View style={styles.container}>
      <SearchComponent placeholder="Pesquisar..." onChangeText={handleSearchChange} />

      <View style={styles.postsContainer}>
        <Text style={styles.sectionTitle}>Últimas Postagens</Text>
        <PostComponent title="Postagem 1" onPress={handlePostPress} />
        <PostComponent title="Postagem 2" onPress={handlePostPress} />
        <PostComponent title="Postagem 3" onPress={handlePostPress} />
        {/* Adicione mais postagens conforme necessário */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  postsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
