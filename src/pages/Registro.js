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
import firestore from '@react-native-firebase/firestore';
import {Input, Button, Image} from "react-native-elements"

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
        if(this.state.email == "" && this.state.password == ""){
            Alert.alert("Campos não preenchidos.");
        }else{
            try{
                this.setState({
                    isLoading: true,
                })
                    auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((res)=>{
                    res.user.updateProfile({
                        displayName: this.state.nome,
                    })
                    firestore().collection('users').add({
                        nome: this.state.nome,
                        email: auth().currentUser.email,
                        uid: auth().currentUser.uid,
                        tempoExperiencia: "",
                        areaAtuacao: "",
                        faculdade: "",
                        especialidade: "",
                        disponivel: "Nao",
                        numero: ""
                    })
                    this.setState({
                        nome:'',
                        email:'',
                        password:'',
                        isLoading: false,
                    })
                    
                    this.props.navigation.navigate("LogIn")
                })
            }catch(err){
                Alert.alert("Email ja em uso")
            }
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
                    <Image 
                    source={require("../imagens/LogoWorkFinderAzul.png")} 
                    resizeMode= "stretch" 
                    style={{width:250, height:200}}
                    />
                    <View style={Estilo.Inputs}>
                    <Input  
                    label=" Insira seu Nome:" 
                    placeholder="Seu Nome ..." 
                    leftIcon={{type: "font-awsome", name: "arrow-right"}} 
                    onChangeText={nome => this.setState({nome})}
                    />
                    <Input  
                    label=" Insira um email:" 
                    placeholder="email@email.com" 
                    leftIcon={{type: "font-awsome", name: "email"}} 
                    onChangeText={email => this.setState({email})}
                    />
                    <Input 
                    label="Senha:" 
                    leftIcon={{type: "font-awsome", name: "lock"}}  
                    placeholder="******"
                    onChangeText={password => this.setState({password})}
                    />
                    <Button 
                    buttonStyle={{backgroundColor:"#404CB1"}} 
                    raised 
                    type="solid" 
                    title="Criar Conta"  
                    onPress={()=> this.Cadastro()}
                    />                    
                    <Button  
                    type="clear" 
                    title="Voltar para LogIn" 
                    raised 
                    titleStyle={{color:"#404CB1", textDecorationLine: "underline"}}  
                    onPress={()=> this.props.navigation.navigate("LogIn")}
                    />
                    </View>
                </View>
            </SafeAreaView>
            
        );
    }
    
}