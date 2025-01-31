import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaEstudiantes = ({ navigation }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      const data = await AsyncStorage.getItem('estudiantes');
      if (data) setEstudiantes(JSON.parse(data));
    };
    cargarEstudiantes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nombre}</Text>
            <Button title="Ver Detalles" onPress={() => navigation.navigate('DetallesEstudiante', { estudiante: item })} />
          </View>
        )}
      />
      <Button title="Agregar Estudiante" onPress={() => navigation.navigate('EditarEstudiante')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 15, backgroundColor: 'white', marginBottom: 10, borderRadius: 5 },
});

export default ListaEstudiantes;
