import React, {Component, useState, useEffect} from 'react';
import Estilo from "../Styles";
import {Text, View, StatusBar, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';



export default function Listagem({navigation}){
        const route = useRoute();
        const {area} = route.params;


            const [loading, setLoading] = useState(true); // Set loading to true on component mount
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
                    <TouchableOpacity onPress={() =>navigation.push("WorkProfile",  {nome: item.nome, 
                      tempo: item.tempoExperiencia,
                      areadeAtuacao: item.areaAtuacao,
                      facul: item.faculdade,
                      especi: item.especialidade,
                      Email: item.email
                      })}>
                        <View style={Estilo.ListaProfissionais}>
                          <View style={{width:90, height:90, backgroundColor:"#404CB1", borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                            <Text style={[Estilo.textoMedioBranco]}>Foto</Text>
                          </View>
                          <View style={[Estilo.TextoLista]}>
                            <Text style={{fontWeight:'bold', fontSize:18}}>Nome: </Text><Text style={{fontSize:18}}>{item.nome}</Text>
                            <Text style={{fontWeight:'bold', fontSize:16}}>Área de Atuação: </Text><Text style={{fontSize:16}}>{item.areaAtuacao}</Text>
                            <Text style={{fontWeight:'bold', fontSize:16}}>Especialidade: </Text><Text style={{fontSize:16}}>{item.especialidade}</Text>
                          </View> 
                        </View>
                    </TouchableOpacity>
                    
                    
                )}/>
            </SafeAreaView>
        )
}