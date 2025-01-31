import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from './screens/Inicio'
import ListaEstudiantes from './screens/ListaEstudiantes'
import DetallesEstudiante from './screens/DetallesEstudiante.jsx'
import EditarEstudiante from './screens/EditarEstudiante'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="ListaEstudiantes" component={ListaEstudiantes}/>
        <Stack.Screen name="DetallesEstudiante" component={DetallesEstudiante}/>
        <Stack.Screen name="EditarEstudiante" component={EditarEstudiante}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
