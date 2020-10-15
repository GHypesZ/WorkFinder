
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar, 
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Estilo from "../Styles";
import auth from "@react-native-firebase/auth";
import {Input, Button} from "react-native-elements"

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
        <View>
      <View style={Estilo.tela1}>
          <Image source={require("../imagens/LogoWorkFinderAzul.png")} resizeMode= "stretch" style={{width:250, height:200}}></Image>
      </View>
      <View style = {Estilo.Inputs} >
        <Input label=" Seu Email:" placeholder="email@email.com" leftIcon={{type: "font-awsome", name: "email"}} onChangeText={email => this.setState({email})}></Input>
      </View>
      <View style = {Estilo.Inputs} >
        <Input label="Senha:" leftIcon={{type: "font-awsome", name: "lock"}} secureTextEntry={true} placeholder="******"
         onChangeText={password => this.setState({password})}></Input>
      </View>
      <View style = {Estilo.Inputs} >
        <View>
          <Button buttonStyle={{backgroundColor:"#404CB1"}} raised type="solid" title="Entrar" onPress={this.login}></Button>
        </View>
      </View>
        <Button type="clear" title="Esqueci a senha" raised titleStyle={{color:"#404CB1", textDecorationLine: "underline"}} onPress={() =>{Alert.alert('OK')}}></Button>
        <Button type="clear" title="Criar uma conta" raised titleStyle={{color:"#404CB1", textDecorationLine: "underline"}} onPress={() =>this.props.navigation.navigate("Registro")}></Button>
    </View>
      </SafeAreaView>
      
    );
  }
  
  
}