import { StyleSheet } from "react-native";
const styles= StyleSheet.create({
    container: {
      paddingBottom:40,
      height:'auto',
      flex:1,
    }
   ,
    input:{
      padding:10,
      fontSize:18,
      borderRadius:10,
      backgroundColor:'#e6e6ff',
      fontFamily:'arial',
      margin:5,
     
    },
    button:{
     backgroundColor:'#2a9d8f',
     borderRadius:10,
     padding:10,
     width:100,
     textAlign:'center',
    },
    itemContainer:{
     padding:10,
     margin:10,
     backgroundColor:'#a3b18a',
     borderRadius:10,
     alignItems:'center'
    },
    itemIage:{
      width:120,
      height:120,
    },
    itemText:{
     fontSize:16,
     color:'#219ebc',
     padding:5,
     width:120,
     fontWeight:'600'
    }
  });

  export default styles