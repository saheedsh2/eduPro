import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Login() {

  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '1040102305461-pslpo9ve977q1v277gsafbmpfh168389.apps.googleusercontent.com',
    expoClientId: '1040102305461-01m0sl385i41lk1jf3klo03hnlhrhneh.apps.googleusercontent.com'
    
  });

  return (
    <View>
      <Image source={require('./../Assets/Images/elearningapp.jpg')} />

      <View style={styles.container} onPress={() => promptAsync()}>
      <Text style={styles.welcomeText}>Welcome to EduBox</Text>
      <Text style={{textAlign: 'center', marginTop: 80, fontSize: 20}}>Login/SignUp</Text>

      <TouchableOpacity style={styles.button}>
      <AntDesign name="google" size={24} color="white" style={{marginRight: 10}}/>
        <Text style={{color:Colors.white}}>Sign In With Google</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopRightRadius:30,
    borderTopLeftRadius: 30
  },
  welcomeText:{
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
   
  },

  button:{
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }

})