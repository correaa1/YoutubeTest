import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'


export default function App() {
  const [search, setSearch] = useState('');

  const getVideos = async() => {
    const result = await axios.get('https://www.googleapis.com/youtube/v3/search?q=boating&key=AIzaSyD7XZQf-k9SuLkH2tLFHbJgt_y8nD6wLHI')
    console.log(result)
  }
  return (
    <View style={styles.container}>
      
      <TextInput value={search} onChangeText={text => setSearch(text)} placeholder='Buscar Videos'/>
      <TouchableOpacity onPress={getVideos}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
