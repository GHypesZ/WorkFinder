import React, {Component} from 'react';
import Estilo from "./Styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from "./pages/Profile";
import AddInfo from "./pages/addInfo";

const Stack = createStackNavigator();


export default function StackProfile(){
    return(
            <Stack.Navigator headerMode= "none">
                <Stack.Screen name="Perfil" component={Profile}/>
                <Stack.Screen name="Update Info" component={AddInfo}/>
            </Stack.Navigator>

    );

}