import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Estilo from "../Styles";
import auth from "@react-native-firebase/auth";

export default class Registro extends Component{
    constructor(){
        super();
        this.state = {
            nome:'',
            email: '',
            password: '',
            isLoading: false,
        }
    }

    Cadastro = () => {
        if(this.state.email === "" && this.password === ""){
            Alert.alert("Campos não preenchidos.");
        }else{
            this.setState({
                isLoading: true,
            })
                auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((res)=>{
                res.user.updateProfile({
                    displayName: this.state.nome,
                })
                this.setState({
                    nome:'',
                    email:'',
                    password:'',
                    isLoading: false,
                })
                this.props.navigation.navigate("LogIn")
            })
        }
    }

    render(){
        return(
            <SafeAreaView style={[Estilo.safe]}>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={Estilo.BoxTitulo}>
                    <Text style={Estilo.textoGrandeBranco}>Criar uma Conta</Text>
                </View>
                <View style={Estilo.tela}>
                    <Text style={Estilo.TituloTextBox}>Insira seu Nome:</Text>
                    <View style={Estilo.espacadorDez}/>
                    <TextInput style = {[Estilo.textBoxLogIn]} value={this.state.nome}
        onChangeText={nome => this.setState({nome})}/>
                    <View style={Estilo.espacadorDez}/>
                    <Text style={Estilo.TituloTextBox}>Insira seu Email:</Text>
                    <View style={Estilo.espacadorDez}/>
                    <TextInput style = {[Estilo.textBoxLogIn]} value={this.state.email}
        onChangeText={email => this.setState({email})}/>
                    <View style={Estilo.espacadorDez}/>
                    <Text style={Estilo.TituloTextBox}>Insira uma Senha:</Text>
                    <View style={Estilo.espacadorDez}/>
                    <TextInput style = {[Estilo.textBoxLogIn]} value={this.state.password}
        onChangeText={password => this.setState({password})}/>
                    <View style={Estilo.espacadorDez}/>
                    <TouchableOpacity style={Estilo.btnEntrar} onPress={()=> this.Cadastro()}>
                        <Text style = {Estilo.textoMedioBranco} > Criar uma conta </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.navigation.navigate("LogIn")}>
                        <Text style={Estilo.btnExtras}>Voltar para LogIn</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
        );
    }
    
}