import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground} from 'react-native';

export default function App() {
const [peso, setPeso] = useState('')
const [altura, setAltura] = useState('')

const[resultado, setResultado] = useState('')

const urlImagem = "https://superafarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png";
const urlImagem2 = "https://wallpaperaccess.com/full/8738926.jpg"

function calcular()
{
  if(isNaN(peso) || isNaN(altura))
  {
    alert("Insira um valor válido nos campos.")
    return
  }

  const valorCalculado = peso / Math.pow(altura, 2)
  setResultado("O seu IMC é de: " + valorCalculado.toFixed(1))
}

  return (
    <View style={styles.container}>
      <Text>Calcule o seu IMC</Text>
      <TextInput style={styles.input} placeholder='Digite o seu Peso (kg)'
      onChangeText={(valor) => setPeso(valor)}/>
      <TextInput style={styles.input} placeholder='Digite a sua Altura (m)'
      onChangeText={(valor) => setAltura(valor)}/>

      <Button title='Calcular' onPress={calcular}/>

      <Text style={styles.resultado}>{resultado}</Text>

      <Image
       source={{uri:urlImagem}}
       style={styles.imagem}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8bff8a',
  },

  titulo:
  {
    marginVertical: 30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input:
  {
    height: 46,
    borderWidht: 1,
    borderColor: '#222',
    margin: 20,
    fontSize: 25,
    padding: 10,
    backgroundColor: '#cbffca',
    borderRadius: 50,
  },

  imagem:
  {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },

  resultado:
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
