import { StatusBar, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { LogBox } from 'react-native';
import { SesionProvider } from './src/context/Sesion/SesionContext';
import PeticionesProvider from './src/context/Data/PeticionesProvider';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';


const App = () => {

    LogBox.ignoreLogs([
        'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
        'react-native-gesture-handler: `PanGestureHandler` is deprecated and will be removed in SDK 37.',
        'react-native-gesture-handler: `Seems like you\'re using an old API with gesture components, check out new Gestures system!',
        '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
        'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types'
    ]);

    const toastConfig = {
        success: (props: any) => (
            <BaseToast
                {...props}
                style={{ borderLeftColor: 'pink' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}
                
            />
        ),
        error: (props: any) => (
            <ErrorToast
              {...props}
              text1Style={{
                fontSize: 17
              }}
              text2Style={{
                fontSize: 15
              }}
            />
        ),
        tomatoToast: ({ text1, props }: any) => (
            <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
              <Text>{text1}</Text>
              <Text>{props.uuid}</Text>
            </View>
        ),
    }

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
                    <Toast config={toastConfig} />
                </SesionProvider>
            </NavigationContainer>
        </PeticionesProvider>

    )
}

export default App