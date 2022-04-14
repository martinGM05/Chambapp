import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialLogin from '../screens/Login/InitialLogin';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';
import Principal from '../screens/Principal';
import TabNavigate from './TabNavigator';
import Trabajador from '../screens/Trabajador';

export type RootStackParams = {
    Principal: undefined;
    Login: undefined;
    Register: undefined;
    PrincipalCliente: undefined;
    Trabajador: {id: string};
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="PrincipalCliente"
            screenOptions={{
                headerShown: false,
                headerStyle:{
                    shadowColor: 'transparent',
                    elevation: 1,
                },
                cardStyle: {
                    backgroundColor: '#f6f6f6',
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="Principal" options={{title: "Initial App"}} component={InitialLogin} />
            <Stack.Screen name="Login" options={{title: "Login"}} component={Login} />
            <Stack.Screen name="Register" options={{title: "Register"}} component={Register} />
            <Stack.Screen name="PrincipalCliente" options={{title: "Principal"}} component={TabNavigate} />
            <Stack.Screen name="Trabajador" options={{title: "Trabajador"}} component={Trabajador} />
        </Stack.Navigator>
    )
}