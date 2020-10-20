import React, {Component} from "react";
import {Text,
View,
StatusBar,
ScrollView, 
Alert,
ActivityIndicator
} from "react-native";
import Estilos from "../Styles";
import SafeAreaView from 'react-native-safe-area-view';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import {Input, Button, BottomSheet, Overlay} from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome';


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
        numero:"" ,
        isVisible:false,
        isVisibleArea:false,
        isLoading:true
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
                        numero:users[0].numero,
                        isLoading:false
                    });
                  });               
    }
    
    addInfo = async ()=> {
        this.setState({isLoading:true})
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
            this.setState({isLoading:false})
            this.props.navigation.navigate("Perfil")
        }
        else{
            Alert.alert("Preencha os campos")
            this.setState({isLoading:false})
        }
        }

    render(){
        return(
            <SafeAreaView style={Estilos.safe}>
                <Overlay isVisible={this.state.isLoading}>
                <Text>Carregando...</Text>
                <ActivityIndicator 
                animating={this.state.isLoading}
                color="#404CB1"
                />
                </Overlay>
                <StatusBar barStyle="light-content" backgroundColor="#404CB1"/>
                <ScrollView>
                <View style={Estilos.tela}>
                    <View style={Estilos.Inputs}>
                    <Text style={{alignSelf:"center", fontSize:20, fontWeight:"bold", color:"#404CB1", marginVertical:20}}>Atualizar Dados</Text>
                        <Input
                        label="Nome:"
                        placeholder={this.state.nome}
                        disabled
                        leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                        placeholderTextColor="black"
                        />
                        <Input
                        label="Email:"
                        placeholder={this.state.email}
                        disabled
                        placeholderTextColor="black"
                        leftIcon={{type: "font-awsome", name: "email"}}
                        />
                        <View style={{flexDirection:"row", width:290, alignItems:"center"}}>
                            <Input
                            disabled
                            placeholder={this.state.disponivel}
                            label="Disponível para Trabalho?"
                            placeholderTextColor="black"
                            leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                            />
                            <Button
                            icon={<Icon
                            name="caret-down"
                            size={20}
                            color="#ffffff"
                            />
                            }
                            onPress={()=>this.setState({isVisible:true})}
                            buttonStyle={{backgroundColor:"#404CB1"}}
                            />
                        </View>
                        <BottomSheet isVisible={this.state.isVisible}>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#9F9F9F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Sim"
                                onPress={()=>this.setState({disponivel:"Sim", isVisible:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#9F9F9F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Não"
                                onPress={()=>this.setState({disponivel:"Não",isVisible:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#FF0000", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#FFFFFF"}}
                                title="Cancelar"
                                onPress={()=>this.setState({isVisible:false})}>
                            </Button>
                        </BottomSheet>
                        <Input
                        label="Tempo de Experiência em Anos:"
                        value={this.state.tempoExperiencia}
                        leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                        onChangeText={tempoExperiencia => this.setState({tempoExperiencia})}
                        />
                        <View style={{flexDirection:"row", width:290, alignItems:"center"}}>
                            <Input
                            disabled
                            placeholder={this.state.areaAtuacao}
                            label="Área de atuação:"
                            placeholderTextColor="black"
                            leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                            />
                            <Button
                            icon={<Icon
                            name="caret-down"
                            size={20}
                            color="#ffffff"
                            />
                            }
                            onPress={()=>this.setState({isVisibleArea:true})}
                            buttonStyle={{backgroundColor:"#404CB1"}}
                            />
                        </View>
                        <BottomSheet isVisible={this.state.isVisibleArea}>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#9F9F9F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Engenharia"
                                onPress={()=>this.setState({areaAtuacao:"Engenharia", isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#9F9F9F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Direito"
                                onPress={()=>this.setState({areaAtuacao:"Direito",isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Odontologia"
                                onPress={()=>this.setState({areaAtuacao:"Odontologia", isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Veterinaria"
                                onPress={()=>this.setState({areaAtuacao:"Veterinaria", isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="Obras"
                                onPress={()=>this.setState({areaAtuacao:"Obras", isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#EFEFEF", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#404CB1"}}
                                title="T.I"
                                onPress={()=>this.setState({areaAtuacao:"T.I", isVisibleArea:false})}>
                            </Button>
                            <Button 
                                type="solid"
                                raised
                                buttonStyle={{backgroundColor:"#FF0000", borderColor:"#5F5F5F", borderBottomWidth:2}}
                                titleStyle={{color:"#FFFFFF"}}
                                title="Cancelar"
                                onPress={()=>this.setState({isVisibleArea:false})}>
                            </Button>
                        </BottomSheet>
                        <Input
                        value={this.state.faculdade}
                        label="Faculdade Cursada:"
                        leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                        onChangeText={faculdade => this.setState({faculdade})}
                        />
                        <Input
                        value={this.state.especialidade}
                        label="Especialidade:"
                        leftIcon={{type:"fotn-awsome", name:"arrow-right"}}
                        onChangeText={especialidade => this.setState({especialidade})}
                        />
                        <Button
                        title="Atualizar"
                        raised
                        loading={this.state.isLoading}
                        buttonStyle={{backgroundColor:"#404CB1"}}
                        onPress ={()=>this.addInfo()}
                        />
                        <View style={{marginBottom:20}}/>
                    </View>
                </View>
                </ScrollView>  
            </SafeAreaView>
            
        );
    }    
}