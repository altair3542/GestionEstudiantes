import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditarEstudiante = ({ Navigation, route }) => {
  const [nombre, setNombre] = useState(route?.params?.estudiante?.nombre || '')
  const [programa, setPrograma] = useState(route?.params?.estudiante?.programa || '')

    const guardarEstudiante = async () => {
      const nuevoEstudiante = { id: Date.now().toString(), nombre, programa };
      let estudiantes = JSON.parse(await AsyncStorage.getItem('estudiantes')) || [];
      estudiantes.push(nuevoEstudiante);
      await AsyncStorage.setItem('estudiantes', JSON.stringify(estudiantes));
      navigation.navigate('ListaEstudiantes');
    };

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre}/>
        <TextInput style={styles.input} placeholder="Programa" value={programa} onChangeText={setPrograma}/>
        <Button title="Guardar" onPress={guardarEstudiante}/>
      </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, input: { borderWidth: 1, padding: 10, marginBottom: 10 } });

export default EditarEstudiante
