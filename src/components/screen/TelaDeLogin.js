import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const TelaDeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui (exemplo simples)
    console.log('Email:', email);
    console.log('Senha:', password);

    if (!email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar lógica para autenticar o usuário no backend
    alert('Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./raindrop.png')} // Imagem de fundo da gota de chuva
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.heading}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo branco semi-transparente
    padding: 20,
    borderRadius: 150, // Ajuste para criar a forma de uma gota de chuva
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#007bff', // Azul escuro
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f8ff', // Azul claro
    borderRadius: 5,
  },
  button: {
    width: '80%',
    backgroundColor: '#007bff', // Azul escuro
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TelaDeLogin;
