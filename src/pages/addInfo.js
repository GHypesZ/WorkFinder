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
    state={
        docId:"",
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
                    });
                    this.setState({
                        docId: users[0].key,
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
    addInfo = async ()=> {
        if(this.state.disponivel != null){
            firestore().collection('users').doc(this.state.docId).update({
                nome: this.state.nome,
                email: this.state.email,
                tempoExperiencia: this.state.tempoExperiencia,
                areaAtuacao: this.state.areaAtuacao,
                faculdade: this.state.faculdade,
                especialidade: this.state.especialidade,
                disponivel: this.state.disponivel,
                numero: this.state.numero
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