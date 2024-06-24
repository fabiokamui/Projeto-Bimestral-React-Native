// PostComponent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const PostComponent = ({ title, onPress }) => {
  // Importe a imagem local
  const backgroundImage = require('../assets/gojo.jpg');

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden', // para cortar a borda arredondada da imagem de fundo
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // overlay preto com 50% de opacidade
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // cor branca para o título sobreposto
    textAlign: 'center',
  },
});

export default PostComponent;
