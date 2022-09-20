import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, } from 'react-native';

const pokemonsIniciais = [
  { id: 1, nome: "Bulbasauro"},
  { id: 4, nome: "Charmander"},
  { id: 7, nome: "Squirtle"},
];

export default function App() {
  const [ pokemonEscolhido, setPokemonEscolhido ] = useState(null);

  const getPokemonData = (idPokemon) => {
    const endpoint = `https://www.googleapis.com/youtube/v3/search/${idPokemon}/`;

    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( json => {
          const data = {
            part: json.part,
            q: json.q,
            key: json.key,
          };

          setPokemonEscolhido(data);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Pokémon');
        });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>ESCOLHA SEU POKÉMON</Text>
        </View>

        {pokemonEscolhido != null && (
          <View style={styles.pokemonBox}>
            <Text style={styles.pokemonNome}>Nome: {pokemonEscolhido.nome}</Text>
            <Text style={styles.pokemonPeso}>Peso: {pokemonEscolhido.peso}</Text>

            <Image resizeMode="stretch" source={{uri:pokemonEscolhido.img}} style={styles.pokemonImg} />
          </View>
        )}

        {pokemonsIniciais.map( data => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{data.q}</Text>
            <Button title="Dados do pokémon" onPress={()=>getPokemonData(data.id)}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#e73e33' },
  topoTitulo: { fontSize: 22, marginBottom: 10, color: '#fff', textAlign: 'center'},

  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

  pokemonBox: { alignItems: 'center' },
  pokemonNome: { fontSize: 22 },
  pokemonPeso: { fontSize: 18 },
  pokemonImg:{ width: 150, height: 150,}
});
