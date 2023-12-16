import { StatusBar } from 'expo-status-bar';
import {Text, Button, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from "./Navigation";


SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
        <View style={{ flex: 1 }} onLayout={SplashScreen.hideAsync}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </View>
  );
}
