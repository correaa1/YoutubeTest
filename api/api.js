import axios from 'axios'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Api () {
  const [search, setSearch] = useState('');
  const user = ['12','25','13']
  const [data, setData] = useState('');
      
  const getVideos = async() => {
    const result = await axios.get(`https://www.googleapis.com/youtube/v3/search?${search}`, {
      params:{
       key: 'AIzaSyD7XZQf-k9SuLkH2tLFHbJgt_y8nD6wLHI',
        maxResults: '5',
        part: 'snippet',
        order: 'title',
        regionCode: 'BR',
        q: search,
        relevanceLanguage:'pt',
        videoDuration: 'any',
      },
   
      
    })
    setData (search)
    if (search ==='') alert('campovazio')
    if (search <= user[1]) alert('ok')
    console.log(result)
    setSearch(result)
  }
  
  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={text => setSearch(text)} placeholder='Buscar Videos'/>
      <TouchableOpacity onPress={getVideos}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      <Text>{data}</Text>
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

