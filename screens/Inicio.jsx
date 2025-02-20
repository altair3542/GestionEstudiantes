import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion de Estudiantes</Text>
      <Button title="Ver Estudiantes" onPress={() => navigation.navigate('ListaEstudiantes')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

export default Inicio;
