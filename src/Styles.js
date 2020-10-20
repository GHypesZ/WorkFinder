import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    
    textoMedioBranco:{
        "fontFamily": "Georgia",
        "fontSize": 18,
        "color": "#ffffff"
    },
    textoMedioCinza:{
            "fontFamily": "Georgia",
            "fontSize": 18,
            "color": "#000000bd"
    },
    textBoxLogIn:{
        "alignItems": "flex-start",
        justifyContent:"center",
        "opacity": 0.56,
        "width": 311,
        "height": 40,
        "borderRadius": 5,
        "borderWidth": 1,
        "borderColor": "rgba(0, 0, 0, 64)",
        "backgroundColor": "rgba(170, 170, 170, 140)",
        color: "#000000",
        "fontSize": 18,
    },
      tela:{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#EFEFEF"
      },
      tela1:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFEFEF",
      },
      Logo:{
        "alignItems": "center",
        justifyContent: "center",
        "width": 190,
        "height": 190,
        "borderRadius": 100,
        "backgroundColor": "#404CB1",
      },
      espacadorDez:{
        alignContent:"center",
        "marginTop": 10
      },
      Inputs:{
        alignContent: "center",
        marginTop: 10,
        width:330
      },
      textoGrandeBranco:{
        "fontFamily": "Georgia",
        "fontSize": 24,
        "color": "#ffffff"
    },
    Grid:{
      flex:1,
      flexDirection:"row",
      flexWrap : "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    BoxImagem:{
        margin:10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#404CB1",
        borderWidth:2,
        borderRadius: 5,
        backgroundColor: "#E5E5E5"
    },
    TextoMedioPreto:{
      fontSize: 18,
      color:"#000000"
    },
    safe:{
      flex:1,
    },
    TituloTextBox:{
      alignItems: "flex-start",
      fontSize:18,
      fontWeight:"bold"
    },
    telaProfile:{
      alignItems: "flex-start",
      marginLeft: 20,
      flex: 1,
      backgroundColor: "#EFEFEF"
    },
    fotoPerfil:{
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginBottom: 20,
      "width": 150,
      "height": 150,
      "borderRadius": 100,
      "backgroundColor": "#404CB1"
    },
    ListaProfissionais:{
      flex: 1,
      flexWrap:"wrap", 
      flexShrink:1,
      flexDirection:"row",
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      borderColor:"#404CB1", 
      borderWidth:2, 
      marginHorizontal:10, 
      padding:10, 
      marginTop:10,
      backgroundColor:"#EFEFEF"
    },

    TextoNormal:{
      fontSize:18
    }

})