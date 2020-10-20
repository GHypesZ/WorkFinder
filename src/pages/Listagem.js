import React, {Component, useState, useEffect} from 'react';
import Estilo from "../Styles";
import {Text, View, StatusBar, TouchableOpacity, FlatList } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import {Avatar, ListItem,} from "react-native-elements";



export default function Listagem({navigation}){
        const route = useRoute();
        const {area} = route.params;
        const [isLoading, setLoading] = useState(false);

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
                    setLoading(false);
                  });
              
                return () => subscriber();
            }, []);

        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <Text 
                style={{alignSelf:"center", fontSize:20, fontWeight:"bold", color:"#404CB1", marginVertical:20}}>Lista de Profissionais de {area}</Text>

                <FlatList data={users}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() =>navigation.push("WorkProfile",  {nome: item.nome, 
                      tempo: item.tempoExperiencia,
                      areadeAtuacao: item.areaAtuacao,
                      facul: item.faculdade,
                      especi: item.especialidade,
                      Email: item.email
                      })}>
                        <ListItem bottomDivider>
                          <Avatar
                          rounded
                          icon={{name:"account-circle"}}
                          />
                          <ListItem.Content>
                            <ListItem.Title>{item.nome}</ListItem.Title>
                            <ListItem.Subtitle>{item.especialidade}</ListItem.Subtitle>
                          </ListItem.Content>
                        </ListItem>
                    </TouchableOpacity>
                    
                    
                )}/>
            </SafeAreaView>
        )
}