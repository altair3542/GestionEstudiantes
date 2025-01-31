import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const DetallesEstudiante = ({ route, navigation }) => {
  const { estudiante } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{estudiante.nombre}</Text>
      <Text>ID: {estudiante.id}</Text>
      <Text>Programa: {estudiante.programa}</Text>
      <Button title="Editar" onPress={() => navigation.navigate('EditarEstudiante', {estudiante})} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default DetallesEstudiante
