import React, {Component} from 'react';
import Icons from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from "./StackHome";
import StackProfile from "./StackProfile";
import Icon from "react-native-vector-icons/MaterialIcons"

const Tab = new createBottomTabNavigator();

export default class Tabpages extends Component {
    render(){
        return(
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarIcon: ({color, size}) =>{
                        let iconName;
                        switch (route.name){
                            case 'Categorias':
                                iconName = 'widgets';
                                break;
                            case 'Profile':
                                iconName = 'account-circle';
                                break;
                        }
                        return <Icon name={iconName} size={size} color = {color}/>;
                    },
                })}
                    tabBarOptions={{activeTintColor: '#404CB1',
                    inactiveTintColor:'#ffffff',
                    inactiveBackgroundColor :"#404CB1",
                    activeBackgroundColor: "#EFEFEF"
                }}
                >
                <Tab.Screen name="Categorias" component={StackHome} />
                <Tab.Screen name="Profile" component={StackProfile}/>
            </Tab.Navigator>    
        );
    }
        
}