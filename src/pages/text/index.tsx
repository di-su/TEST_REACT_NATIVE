import * as React from 'react';
import {Text, SafeAreaView, ScrollView, TextInput} from 'react-native';
import styles from '../../resources/styles/styles';
import {useState} from 'react';
import PrimaryButton from '../../components/atoms/primaryButton';

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const authToken = 'process.env.TWILIO_AUTH_TOKEN';
// const client = require('twilio')(accountSid, authToken);

function test() {
  console.log('yes');
}

function TextScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Text</Text>
      <ScrollView>
        <Text style={styles.smallText}>Phone Number:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="07445127101"
          value="07445127101"
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          defaultValue={phoneNumber}
        />
        <Text style={styles.smallText}>Message:</Text>
        <TextInput
          style={[styles.messageBox]}
          placeholder="Hello"
          onChangeText={message => setMessage(message)}
          multiline={true}
          defaultValue={message}
        />
        <PrimaryButton onPress={() => test()} text="Send Message" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TextScreen;
