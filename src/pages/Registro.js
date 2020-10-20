import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native';
import Estilo from "../Styles";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import {Input, Button, Image, Header} from "react-native-elements"


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
        if(this.state.email == ""){
            Alert.alert("insira um email valido.");
            this.setState({isLoading: false})
        }else if(this.state.password == "" ){
            Alert.alert("insira uma senha valida.");
            this.setState({isLoading: false})
        }else if(this.state.nome==""){
            Alert.alert("insira um Nome.");
            this.setState({isLoading: false})
        }else{
                this.setState({isLoading: true})
                    auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((res)=>{
                    res.user.updateProfile({
                        displayName: this.state.nome,
                    }).catch((error)=>{
                        this.setState({isLoading:false})
                            Alert.alert(error.code);
                    })
                    firestore().collection('users').add({
                        nome: this.state.nome,
                        email: auth().currentUser.email,
                        uid: auth().currentUser.uid,
                        tempoExperiencia: "",
                        areaAtuacao: "",
                        faculdade: "",
                        especialidade: "",
                        disponivel: "Não",
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
                
            }
    }

    render(){
        return(
            <SafeAreaView >
                 <Header 
                centerComponent={{text:"Criar Conta", style:{color:"#ffffff",fontSize:24}}}
                containerStyle={{backgroundColor:"#404CB1",
                justifyContent:"center",
                }}
                />                
                <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={-60}
                style={{justifyContent:"center", alignItems:"center"}}>
                       
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                    <View style={{alignItems:"center"}}>
                        <Image
                        source={require("../imagens/LogoWorkFinderAzul.png")} 
                        resizeMode= "stretch" 
                        style={{width:250, height:200, marginBottom:100, marginTop:20}}
                        />
                    </View>
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
                    <ActivityIndicator
                    size="large" 
                    color="#404CB1"
                    animating={this.state.isLoading}
                    />
                    
                    </View>
                    </KeyboardAvoidingView>
            </SafeAreaView>
            
        );
    }
    
}