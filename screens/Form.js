/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';

function Form({ navigation }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobNum, setMobNum] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.textStyle}>Fill the form</Text>
            <TextInput
              style={[styles.textInput, { marginTop: 20 }]}
              placeholder={'First Name'}
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Last Name'}
              onChangeText={(text) => setLastName(text)}
              value={lastName}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Mobile Number'}
              onChangeText={(text) => setMobNum(text)}
              value={mobNum}
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Email Id'}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Date of birth'}
              onChangeText={(text) => setDob(text)}
              value={dob}
              keyboardType="number-pad"
            />
            <TextInput
              style={styles.textInput}
              placeholder={'Gender'}
              onChangeText={(text) => setGender(text)}
              value={gender}
            />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                if (
                  email === '' ||
                  gender === '' ||
                  firstName === '' ||
                  lastName === '' ||
                  mobNum === '' ||
                  dob === ''
                ) {
                  Alert.alert('Fill all the fields...');
                } else if (mobNum.length != 10) {
                  Alert.alert('Invalid mobile number...');
                } else {
                  navigation.navigate('Info', {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    dob: dob,
                    gender: gender,
                    mobNum: mobNum,
                  });
                }
              }}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderWidth: 2.5,
    height: 50,
    width: '85%',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 16,
    textAlign: 'center',
    padding: 7,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonStyle: {
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#3080FF',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
});
export default Form;
