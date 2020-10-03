
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar, Image
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Estilo from "../Styles";
import auth from "@react-native-firebase/auth";

export default class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: "",
      isAuthenticated: false,
    };
  }
  
  
  login = async () => {
      const {email, password} = this.state;
      try {
        const user  = await auth().signInWithEmailAndPassword(email, password);
        this.setState({ isAuthenticated: true});
        {this.state.isAuthenticated ? this.props.navigation.navigate("HomePage", this.state.email) : null}
        console.log(user);
      }catch (err){
        Alert.alert("Email ou senha incorretos")
      }
  }

  render(){
    return(
      <SafeAreaView style = {[Estilo.tela]}>
        <StatusBar barStyle="dark-content" backgroundColor="#EFEFEF"/>
        <View style = {[Estilo.tela]} >
      <View>
          <Image source={require("../imagens/LogoWorkFinderAzul.png")} resizeMode= "stretch" style={{width:250, height:200}}></Image>
      </View>
      <View style = {Estilo.espacadorVinte} >
        <TextInput style = {[Estilo.textBoxLogIn]} placeholder="Usuário:" placeholderTextColor="black" value={this.state.email}
        onChangeText={email => this.setState({email})}></TextInput>
      </View>
      <View style = {Estilo.espacadorDez} >
        <TextInput secureTextEntry={true} style = {[Estilo.textBoxLogIn]} placeholder="Senha:" placeholderTextColor="black" value={this.state.password}
         onChangeText={password => this.setState({password})}></TextInput>
      </View>
      <View style = {Estilo.espacadorDez} >
        <View>
          <TouchableOpacity style = {Estilo.btnEntrar} onPress={this.login}>
            <Text style = {Estilo.textoMedioBranco} > Entrar </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Estilo.espacadorDez}>
        <TouchableOpacity onPress={() =>{Alert.alert('OK')}}>
          <Text style = {Estilo.btnExtras} > Esqueci a senha </Text>
        </TouchableOpacity>
      </View>
      <View style={Estilo.espacadorDez}>
        <TouchableOpacity onPress={() =>this.props.navigation.navigate("Registro")}>
          <Text style = {Estilo.btnExtras} > Criar uma conta </Text>
        </TouchableOpacity>
      </View>
    </View>
      </SafeAreaView>
      
    );
  }
  
  
}