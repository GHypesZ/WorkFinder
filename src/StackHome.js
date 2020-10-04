import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./pages/Home"
import Listagem from "./pages/Listagem";
import WorkProfile from "./pages/WorkProfile";

const Stack = createStackNavigator();


export default function StackHome(){
    return(
            <Stack.Navigator headerMode= "none">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Listagem" component={Listagem}/>
                <Stack.Screen name= "WorkProfile" component={WorkProfile}/>
            </Stack.Navigator>

    );

}