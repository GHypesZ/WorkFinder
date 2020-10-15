import React, {Component, useState, useEffect} from 'react';
import Estilo from "../Styles";
import {Text, View, StatusBar, TouchableOpacity, FlatList } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import {ListItem} from "react-native-elements";



export default function Listagem({navigation}){
        const route = useRoute();
        const {area} = route.params;


            const [users, setUsers] = useState([]); // Initial empty array of users
          
            useEffect(() => {
              const subscriber = firestore()
                .collection('users').where("areaAtuacao", "==", area).where("disponivel", "==", "Sim")
                .onSnapshot(querySnapshot => {
                    const users = [];
              
                    querySnapshot.forEach(documentSnapshot => {
                      users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                      });
                    });
              
                    setUsers(users);
                  });
              
                return () => subscriber();
            }, []);

        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={[Estilo.BoxTitulo]}>
                    <Text style={[Estilo.textoGrandeBranco]}>Profissionais de {area}</Text>
                    <View style={[Estilo.espacadorDez]}/>
                </View>

                <FlatList data={users}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() =>navigation.push("WorkProfile",  {nome: item.nome, 
                      tempo: item.tempoExperiencia,
                      areadeAtuacao: item.areaAtuacao,
                      facul: item.faculdade,
                      especi: item.especialidade,
                      Email: item.email
                      })}>
                        <ListItem bottomDivider
                        leftAvatar={{title: item.nome[0],
                        showAccessory: false
                        }}
                        title={item.nome}
                        subtitle={item.especialidade}
                        c
                        />
                    </TouchableOpacity>
                    
                    
                )}/>
            </SafeAreaView>
        )
}