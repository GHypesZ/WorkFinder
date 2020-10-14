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
        state={
            nome:"",
            email:"",
            tempoExperiencia:"",
            areaAtuacao:"",
            faculdade:"",
            especialidade:"",
            disponivel:"",
            numero:""  
    	}
    constructor(){
        super();
        this.subscriber = firestore()
                .collection('users').where("uid", "==", auth().currentUser.uid)
                .onSnapshot(querySnapshot => {
                    const users = [];
              
                    querySnapshot.forEach(documentSnapshot => {
                      users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                      });
                      console.log(users[0])
                    });
                    this.setState({
                        nome:users[0].nome,
                        email:users[0].email,
                        tempoExperiencia:users[0].tempoExperiencia,
                        areaAtuacao:users[0].areaAtuacao,
                        faculdade:users[0].faculdade,
                        especialidade:users[0].especialidade,
                        disponivel:users[0].disponivel,
                        numero:users[0].numero
                    });
                  });
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
                    <Text style={Estilos.TituloTextBox}>Nome: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.nome}</Text>
                    <Text style={Estilos.TituloTextBox}>Tempo de Experiencia: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.tempoExperiencia}</Text>
                    <Text style={Estilos.TituloTextBox}>Área de Atuação: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.areaAtuacao}</Text>
                    <Text style={Estilos.TituloTextBox}>Faculdade Cursada: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.faculdade}</Text>
                    <Text style={Estilos.TituloTextBox}>Especialidade: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.especialidade}</Text>
                    <Text style={Estilos.TituloTextBox}>Disponivel para Trabalho: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.disponivel}</Text>
                    <Text style={Estilos.TituloTextBox}>Email: </Text>
                    <Text style={[Estilos.TextoNormal]}>{this.state.email}</Text>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Update Info")}>
                        <Text style={Estilos.btnExtras}>Editar Info</Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
            
        );
    }    
}