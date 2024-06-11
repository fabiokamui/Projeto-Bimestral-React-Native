import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Importe o componente de animação

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para verificar o nome de usuário e senha
    // Por exemplo, você pode comparar com valores fixos ou enviar uma solicitação para um servidor para autenticar

    // Exemplo simples apenas para demonstração
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra tela após o login bem-sucedido
      // navigation.navigate('PaginaSecreta');
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView // Componente de animação de chuva
        source={require('./rain_animation.json')} // Coloque o caminho para o arquivo JSON de animação
        autoPlay
        loop
        style={styles.animation}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  animation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background transparente para a chuva aparecer
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default App;
