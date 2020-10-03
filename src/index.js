import React, {Component} from 'react';
import Estilo from "./Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabPages from "./TabPages";
import LogIn from "./pages/LogIn";
import Registro from "./pages/Registro";

const Stack = createStackNavigator();


export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode= "none">
                <Stack.Screen name="LogIn" component={LogIn}/>
                <Stack.Screen name="Registro" component={Registro}/>
                <Stack.Screen name="HomePage" component={TabPages}/>
            </Stack.Navigator>
        </NavigationContainer>

    );

}