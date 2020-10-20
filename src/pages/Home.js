import React, {Component} from 'react';
import Estilo from "../Styles";
import {Text, View, StatusBar,ScrollView, Image, TouchableOpacity } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';



export default class Home extends Component{
        constructor(){
            super();
        }
    render(){
        return(
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <Text style={{alignSelf:"center", fontSize:20, fontWeight:"bold", color:"#404CB1", marginVertical:20}}>Áreas de Atuação</Text>

                <ScrollView>
                    <View style={Estilo.Grid}>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'Engenharia',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/Engenharia.png")} style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>Engenharia</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'Direito',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/Direito.png")} resizeMode= "center"style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>Direito</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'Odontologia',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/odonto.png")} style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>Odontologia</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'Veterinaria',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/veterinaria.png")} style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>Veterinaria</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'Obras',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/obras.png")} style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>Obras</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.props.navigation.push("Listagem",  {area: 'T.I',})}>
                        <View style={[Estilo.BoxImagem]}>
                            <Image source={require("../imagens/ti.png")} style={{width:150, height:150}}/>
                            <Text style={Estilo.TextoMedioPreto}>T.I.</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    


                    
                </ScrollView>
            </SafeAreaView>   
        );     

    }
    
}