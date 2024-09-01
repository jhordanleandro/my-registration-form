import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

const RegistrationForm = () => {
  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  const { colors } = useTheme();

  const handleSubmit = () => {
    console.log({
      username,
      name,
      password,
      city,
      country,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      
      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      
      <TextInput
        label="Nome"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      
      <TextInput
        label="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      
      <TextInput
        label="Cidade"
        value={city}
        onChangeText={text => setCity(text)}
        style={styles.input}
      />
      
      <TextInput
        label="País"
        value={country}
        onChangeText={text => setCountry(text)}
        style={styles.input}
      />

      <Button 
        mode="contained" 
        onPress={handleSubmit}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default RegistrationForm;
