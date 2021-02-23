// import React,{useState} from 'react';
// import { StyleSheet,View,StatusBar,TextInput,Button,Alert,Text,Image,TouchableOpacity  } from 'react-native';

// export default function Login({navigation}) {
//   const [text,setText]=useState('text');
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <View style={{height:100}}></View>
//       <Image source={require("./src/images/logo.png")} style={{height:250,width:250}}/>
     
//       <View>
//       <Text style={styles.textlogin}>LOGIN</Text>
//       </View>
//       <View style={{height:50}}></View>
//       <TextInput
        
//         placeholder="Enter Your No"
//         onChangeText={(val) => setText(val)}
//         style={styles.input}
//       />
//       <TouchableOpacity onPress={()=>{navigation.navigate("Draw")}}>
//       <View style={{height:50}}></View>
//       <View style={{alignItems:'center',justifyContent:"center",backgroundColor:'green', height:50,width:150,borderRadius:10,borderWidth:1,borderColor:'black'}}>
//       <Text style={{color:'white',fontSize:20}}>
// Get OTP
//       </Text>
//       </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
     
//       <Text style={{color:'black',fontSize:20}}>
// SignUp
//       </Text>
      
//       </TouchableOpacity>
// <View style={{height:300}}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width:'100%',
//     backgroundColor:'#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input:{
//      alignItems: 'center',
//     justifyContent: 'center',
//       fontSize:20,
    
//   },
//   textlogin:{
//     fontSize:40,


//   },

// });

import React,{useState} from 'react';
import { StyleSheet,View,StatusBar,TextInput,Button,Alert,Text,Image,TouchableOpacity  } from 'react-native';

export default function Motp({navigation}) {
  const [text,setText]=useState('text');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <View style={{height:200}}></View>
     
    <Image source={require("./src/images/logo.png")} style={{height:100,width:100}}/>
      <Text style={styles.textlogin}>Verification Code</Text>
      <View>
      
      </View>
      <View style={{height:50}}></View>
      <TextInput
        
        placeholder="Enter OTP."
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      
      <TouchableOpacity onPress={()=>{navigation.navigate("Draw")}}>
      <View style={{height:50}}></View>
      <View style={{alignItems:'center',justifyContent:"center",backgroundColor:'#383e56', height:50,width:150,borderRadius:10,borderWidth:1,borderColor:'black'}}>
      <Text style={{color:'white',fontSize:20}}>
Confirm
      </Text>
      </View>
      </TouchableOpacity>

    
<View style={{height:300}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:20,
  
      width:'70%',
      
     
      margin:10,
      borderRadius:5,
      fontStyle:"italic",
      alignItems:'center',
      textAlign:"center"


      
},
  textlogin:{
      fontSize:40,
      color:'#51c2d5'


  }

});