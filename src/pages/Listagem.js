import React, {Component, useState, useEffect} from 'react';
import Estilo from "../Styles";
import {Text, View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';



export default function Listagem(){
        const route = useRoute();
        const {area} = route.params;


            const [loading, setLoading] = useState(true); // Set loading to true on component mount
            const [users, setUsers] = useState([]); // Initial empty array of users
          
            useEffect(() => {
              const subscriber = firestore()
                .collection('users').where("areaAtuacao", "==", area)
                .onSnapshot(querySnapshot => {
                    const users = [];
              
                    querySnapshot.forEach(documentSnapshot => {
                      users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                      });
                    });
              
                    setUsers(users);
                    setLoading(false);
                  });
              
                return () => subscriber();
            }, []);
          
            if (loading) {
              return <ActivityIndicator />;
            }

        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={[Estilo.BoxTitulo]}>
                    <Text style={[Estilo.textoGrandeBranco]}>Profissionais de {area}</Text>
                    <View style={[Estilo.espacadorDez]}/>
                </View>
                <FlatList data={users}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <View style={Estilo.ListaProfissionais}>
                            <Text> {item.nome}</Text>
                            <Text>{item.especialidade}</Text>
                            <Text>{item.faculdade}</Text>
                        </View>
                    </TouchableOpacity>
                    
                    
                )}/>
            </SafeAreaView>
        )
}