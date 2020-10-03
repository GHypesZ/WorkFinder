import React, {Component} from "react";
import {Text,
View,
StatusBar,
TouchableOpacity
} from "react-native";
import Estilos from "../Styles";
import SafeAreaView from 'react-native-safe-area-view';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';


export default class Profile extends Component {

    constructor(){
        super();
        this.getUser();
    }
    state={
        nome:"",
        email:"",
        tempoExperiencia:"",
        areaAtuacao:"",
        faculdade:"",
        especialidade:"",
        disponivel:"", 
}
    getUser = async ()=>{
        const UserDoc = await firestore().collection('users').doc(auth().currentUser.uid).onSnapshot(doc =>{
            this.setState({
                    nome : doc.data().nome,
                    email: doc.data().email,
                    tempoExperiencia: doc.data().tempoExperiencia,
                    areaAtuacao: doc.data().areaAtuacao,
                    faculdade: doc.data().faculdade,
                    especialidade: doc.data().especialidade,
                    disponivel: doc.data().disponivel,
            })
        })
    }
    render(){
        return(
            <SafeAreaView style={Estilos.safe}>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={[Estilos.BoxTitulo]}>
                    <Text style={[Estilos.textoGrandeBranco]}>Seu Perfil</Text>            
            	</View>
                <View style = {Estilos.fotoPerfil} >
                    <Text style = {[Estilos.textoMedioBranco]} > Foto </Text>
                </View>
                <View style={Estilos.telaProfile}>
                    <Text style={Estilos.TituloTextBox}>Nome: {this.state.nome}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Tempo de Experiencia: {this.state.tempoExperiencia}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Área de Atuação: {this.state.areaAtuacao}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Faculdade Cursada: {this.state.faculdade}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Especialidade: {this.state.especialidade}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Disponivel para Trabalho: {this.state.disponivel}</Text>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Email: {this.state.email}</Text>
                    <View style={Estilos.espacadorDez}/>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Update Info")}>
                        <Text style={Estilos.btnExtras}>Editar Info</Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
            
        );
    }    
}