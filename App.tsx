import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import React from 'react'
import Principal from './src/screens/Principal'

import InitialLogin from './src/screens/Login/InitialLogin';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { LogBox } from 'react-native';
import Perfil from './src/screens/Profile/Perfil';
import TrabajosEnCuso from './src/screens/EnCurso/TrabajosEnCuso';
import ValorarTrabajo from './src/screens/EnCurso/ValorarTrabajo';
import { SesionProvider } from './src/context/Sesion/SesionContext';
import PeticionesProvider from './src/utils/PeticionesProvider';

const App = () => {

    LogBox.ignoreLogs([
        'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
        'react-native-gesture-handler: `PanGestureHandler` is deprecated and will be removed in SDK 37.',
        'react-native-gesture-handler: `Seems like you\'re using an old API with gesture components, check out new Gestures system!',
        '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!'
    ]);


    return (
        <PeticionesProvider>
            <NavigationContainer>
                <SesionProvider>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent={true}
                        animated={true}
                        showHideTransition="fade"
                    />
                    <StackNavigator />
                </SesionProvider>
            </NavigationContainer>
        </PeticionesProvider>

    )
}

export default App

const styles = StyleSheet.create({})