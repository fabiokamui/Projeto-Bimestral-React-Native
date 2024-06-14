import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const PublicacaoScreen = () => {
  const [texto, setTexto] = useState('');
  const [contador, setContador] = useState(1000);

  const handleTextoChange = (texto) => {
    setTexto(texto);
    setContador(1000 - texto.length); // limita o contador de caracteres restantes
  };

  const handlePublicar = () => {
    // Ideia da publicação aqui, por exemplo, enviar o texto para um servidor
    alert('Texto publicado: ' + texto);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Digite sua publicação..."
        onChangeText={handleTextoChange}
        value={texto}
        maxLength={1000} // Tamanho ou quantidade de caracteres
      />
      <Text style={styles.contador}>{contador} caracteres restantes</Text>
      <TouchableOpacity style={styles.button} onPress={handlePublicar}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100, // Altura do TextInput
  },
  contador: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PublicacaoScreen;
