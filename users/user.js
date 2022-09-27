import React,{useState} from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';

export default function User() {
 const user = 10
 const [data, setData] = useState('');
 const [input, setInput] = useState('');

     function alteraDados () {
          setData (input)
          if (input ==='') alert('campovazio')
          if (input === user) alert('ok')
     }

     return (
       <View>
         
         <TextInput value={input} onChangeText={text => setInput(text)} placeholder='digite aqui'/>
          <TouchableOpacity onPress={alteraDados}>
          <Text>enviar</Text>
          </TouchableOpacity>
          <Text>{data}</Text>
          
       
       </View>
     );
   }
   
 