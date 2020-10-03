import React, {Component} from "react";
import {Text,
View,
StatusBar,
TouchableOpacity,
TextInput,
ScrollView, Alert
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Estilos from "../Styles";
import SafeAreaView from 'react-native-safe-area-view';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';


export default class AddInfo extends Component {
    constructor(){
        super();
        usuario = firestore().collection("users").doc(auth().currentUser.uid).onSnapshot(doc => {
            this.setState({
                    nome: doc.data().nome,
                    email: doc.data().email,
                    tempoExperiencia: doc.data().tempoExperiencia,
                    areaAtuacao: doc.data().areaAtuacao,
                    faculdade: doc.data().faculdade,
                    especialidade: doc.data().especialidade,
                    disponivel: doc.data().disponivel,
            })
        })
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
    addInfo = async ()=> {
        if(this.state.disponivel != null){
            firestore().collection('users').doc(auth().currentUser.uid).update({
                nome: auth().currentUser.displayName,
                email: auth().currentUser.email,
                tempoExperiencia: this.state.tempoExperiencia,
                areaAtuacao: this.state.areaAtuacao,
                faculdade: this.state.faculdade,
                especialidade: this.state.especialidade,
                disponivel: this.state.disponivel
            })
            this.props.navigation.navigate("Perfil")
        }
        else{
            Alert.alert("Preencha os campos")
        }
        }
    render(){
        return(
            <SafeAreaView style={Estilos.safe}>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <View style={[Estilos.BoxTitulo]}>
                    <Text style={[Estilos.textoGrandeBranco]}>Atualizar Daddos</Text>            
            	</View>
                <ScrollView>
                <View style={Estilos.tela}>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Nome:</Text>
                    <View style={Estilos.textBoxLogIn}>
                    <Text style= {{marginLeft:5,"fontSize": 18}}>{auth().currentUser.displayName}</Text>
                    </View>
                    <View style={Estilos.espacadorDez}/>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Email:</Text>
                    <View style={Estilos.textBoxLogIn}>
                    <Text style= {{marginLeft:5,"fontSize": 18}}>{auth().currentUser.email}</Text>
                    </View>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Disponível para Trabalho?</Text>
                    <View style={Estilos.espacadorDez}/>
                    <DropDownPicker items={[{label: "Sim", value:"Sim"},
                                        {label:"Não", value:"Não"}]}
                    defaultValue={"Sim"}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: "rgba(170, 170, 170, 140)","opacity": 0.56, width: 311,"borderColor": "rgba(0, 0, 0, 64)",}}
                    dropDownStyle={{backgroundColor:  "rgba(170, 170, 170, 140)"}}
                    itemStyle={{
                        width:311,
                        justifyContent: 'flex-start',
                        fontSize: 18,
                    }}
                    onChangeItem={item => this.setState({disponivel: item.value})}/>    
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Tempo de Experiência (em anos)</Text>
                    <View style={Estilos.espacadorDez}/>
                    <TextInput style = {[Estilos.textBoxLogIn]} defaultValue={this.state.tempoExperiencia} value={this.state.tempoExperiencia}
                    onChangeText={tempoExperiencia => this.setState({tempoExperiencia})}/>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Área de Atuação</Text>
                    <View style={Estilos.espacadorDez}/>
                    <DropDownPicker items={[{label: "Engenharia", value:"Engenharia"},
                                        {label:"Direito", value:"Direito"},
                                        {label:"Odontologia", value:"Odontologia"},
                                        {label:"Veterinaria", value:"Veterinaria"},
                                        {label:"Obras", value:"Obras"},
                                        {label:"T.I", value:"T.I"}]}
                    defaultValue={"Engenharia"}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: "rgba(170, 170, 170, 140)","opacity": 0.56, width: 311,"borderColor": "rgba(0, 0, 0, 64)"}}
                    dropDownStyle={{backgroundColor:  "rgba(170, 170, 170, 140)"}}
                    itemStyle={{
                        width:311,
                        justifyContent: 'flex-start',
                        fontSize: 18,
                    }}
                    onChangeItem={item => this.setState({areaAtuacao: item.value})}/>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Faculdade Cursada</Text>
                    <View style={Estilos.espacadorDez}/>
                    <TextInput style = {[Estilos.textBoxLogIn]} defaultValue={this.state.faculdade} value={this.state.faculdade}
                    onChangeText={faculdade => this.setState({faculdade})}/>
                    <View style={Estilos.espacadorDez}/>
                    <Text style={Estilos.TituloTextBox}>Especialidade</Text>
                    <View style={Estilos.espacadorDez}/>
                    <TextInput style = {[Estilos.textBoxLogIn]} defaultValue={this.state.especialidade} value={this.state.especialidade}
                    onChangeText={especialidade => this.setState({especialidade})}/>
                    <View style={Estilos.espacadorDez}/>
                    <TouchableOpacity style={Estilos.btnEntrar} onPress ={()=>this.addInfo()}>
                        <Text style={Estilos.textoMedioBranco}>Atualizar</Text>
                    </TouchableOpacity> 
                    <View style={Estilos.espacadorDez}/>
                </View>
                </ScrollView>  
            </SafeAreaView>
            
        );
    }    
}