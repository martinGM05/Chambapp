import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InitialLogin from '../screens/Login/InitialLogin';
import Login from '../screens/Login/Login';
import Register from '../screens/Login/Register';

export type RootStackParams = {
    Principal: undefined;
    Login: undefined;
    Register: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Principal"
            screenOptions={{
                headerShown: false,
                headerStyle:{
                    shadowColor: 'transparent',
                    elevation: 1,
                },
                cardStyle: {
                    backgroundColor: '#fff',
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name="Principal" options={{title: "Initial App"}} component={InitialLogin} />
            <Stack.Screen name="Login" options={{title: "Login"}} component={Login} />
            <Stack.Screen name="Register" options={{title: "Register"}} component={Register} />
        </Stack.Navigator>
    )
}