/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

function Info({ route, navigation }) {
  const { firstName, lastName, mobNum, email, dob, gender } = route.params;
  const [name, setName] = useState(firstName.concat(' ', lastName));
  return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={[styles.textStyle, {fontSize: 32}]}>
            {firstName} {lastName}
          </Text>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={[styles.textStyle, {marginTop: 10}]}>Mobile number: {mobNum}</Text>
          <Text style={styles.textStyle}>Email: {email}</Text>
          <Text style={styles.textStyle}>Date of birth: {dob}</Text>
          <Text style={styles.textStyle}>Gender: {gender}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 27,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
export default Info;
