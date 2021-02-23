import React,{useState} from 'react';
import { StyleSheet,View,StatusBar,TextInput,Button,Alert,Text,Image,TouchableOpacity  } from 'react-native';

export default function Signup({navigation}) {
  const [text,setText]=useState('text');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <View style={{height:310}}></View>
     
    <Image source={require("./src/images/logo.png")} style={{height:100,width:100}}/>
    
      <Text style={styles.textlogin}>SignUp</Text>
      <View>
      
      </View>
      <TextInput
        
        placeholder="Enter Your Name"
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      <TextInput
        
        placeholder="Enter Your Email"
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      <TextInput
        
        placeholder="Enter Your Password"
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      <TextInput
        
        placeholder="Enter Your Phone No"
        onChangeText={(val) => setText(val)}
        style={styles.input}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
      
      <View style={{alignItems:'center',justifyContent:"center",backgroundColor:'#383e56', height:50,width:150,borderRadius:10,borderWidth:1,borderColor:'black'}}>
      <Text style={{color:'white',fontSize:20}}>
Register
      </Text>
      </View>
      </TouchableOpacity>
<View style={{height:400}}></View>
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