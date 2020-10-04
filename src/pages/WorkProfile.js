import React, {Component} from "react";
import {Text,
View,
StatusBar,
TouchableOpacity
} from "react-native";
import Estilos from "../Styles";
import SafeAreaView from 'react-native-safe-area-view';
import { useRoute } from '@react-navigation/native';


export default function WorkProfile({route}){
    //const route = useRoute();
    //const {prof} = route.params;

        return(
            <SafeAreaView style={Estilos.safe}>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={[Estilos.BoxTitulo]}>
                    <Text style={[Estilos.textoGrandeBranco]}>Perfil</Text>            
            	</View>
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
                
            </SafeAreaView>
            
        );   
}