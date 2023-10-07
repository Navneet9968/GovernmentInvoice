import {View,Text ,TouchableOpacity, TextInput,StyleSheet,Alert} from 'react-native';
import React ,{useRef,useState} from 'react';
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import firebase from 'firebase/compat/app';


const Otp =()=>{
    // const [phoneNumber,setPhoneNumber]=useState('');
    // const [code,setCode]=useState('');

    // const [verificationId,setVerificationId]=useState(null);
    // const recaptchaVerifier =useRef(null); 

    // const sendVerification= ()=>{
    //     const phoneProvider =new firebase.auth.PhoneAuthProvider();
    //     phoneProvider.verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
    //     .then(setVerificationId).then(console.log("code success!");
    //     console.log(phoneNumber);
    //     setPhoneNumber('');
    // };

const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const Tab = createBottomTabNavigator();

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

    const confirmCode = ()=>{
        console.log(verificationId, code);
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId,code);
        console.log(credential);
        firebase.auth().signInWithCredential(credential)
        .then(()=>{
            setCode('');
        })
        .catch((error)=>{
            //show an alert of error
            alert(error);
        })
       alert('Login Successful. Welcome',);
    }

    return (
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            <Text style={styles.otpText}>
            Login Using OTP
            </Text>

            <TextInput
                placeholder='Phone Number with country code'
                onChangeText={(inp)=>{setPhoneNumber(inp)}}
                value={phoneNumber}
                keyboardType='phone-pad'
                autoComplete='tel'
                style={styles.textInput}

            />
            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                    Send Verification
                </Text>
                
            </TouchableOpacity>

            <TextInput
                placeholder='Confirm Code'
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
            />

            <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
                <Text style={styles.buttonText}>
                    Confirm verification
                </Text>
            </TouchableOpacity>

        </View>
    )
}



const styles= StyleSheet.create(
    {
        container : {
            flex:1,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent:'center'

        },
            textInput: {
            paddingTop:40,
            paddingBottom:20,
            paddingHorizontal: 20,
            fontSize: 24,
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
            marginBottom: 20,
            textAlign:'center',
            color: '#fff'
    },
    sendVerification: {
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,
    },

    sendCode:{
        padding: 20,
        backgroundColor: '#9b59b6',
        borderRadius: 10,
    },

    buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight:'bold',
    },

    otpText: {
    fontSize: 24,
    fontWeight:'bold',
    color:'#fff',
    margin: 20
    }
});

export default Otp;