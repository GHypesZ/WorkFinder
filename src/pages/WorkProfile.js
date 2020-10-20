import React, {Component} from "react";
import {Text,
View,
StatusBar,
FlatList
} from "react-native";
import Estilos from "../Styles";
import SafeAreaView from 'react-native-safe-area-view';



export default function WorkProfile({route}){

        return(
            <SafeAreaView style={Estilos.safe}>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <Text style={{alignSelf:"center", fontSize:20, fontWeight:"bold", color:"#404CB1", marginVertical:20}}>Perfil do Profissional</Text>
                <View style = {Estilos.fotoPerfil} >
                    <Text style = {[Estilos.textoMedioBranco]} > Foto </Text>
                </View>
                <View style={Estilos.telaProfile}>
                    <Text style={Estilos.TituloTextBox}>Nome: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.nome}</Text>
                    <Text style={Estilos.TituloTextBox}>Tempo de Experiencia: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.tempo}</Text>
                    <Text style={Estilos.TituloTextBox}>Área de Atuação: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.areadeAtuacao}</Text>
                    <Text style={Estilos.TituloTextBox}>Faculdade Cursada: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.facul}</Text>
                    <Text style={Estilos.TituloTextBox}>Especialidade: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.especi}</Text>
                    <Text style={Estilos.TituloTextBox}>Email: </Text>
                    <Text style={[Estilos.TextoNormal]}>{route.params.Email}</Text>
                </View>
                <View>
                    <FlatList>
                        
                    </FlatList>
                </View>
                
            </SafeAreaView>
            
        );   
}