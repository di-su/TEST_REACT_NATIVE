import * as React from 'react';
import {useState} from 'react';
import {ScrollView, Text, TextInput, SafeAreaView} from 'react-native';
import styles from '../../resources/styles/styles';
import PrimaryButton from '../../components/atoms/primaryButton';
import RNFS from 'react-native-fs';

function AddLeads() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [leadData, setLeadData] = useState('');

  function Add({firstName, lastName}) {
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Add Lead</Text>
      <ScrollView>
        <Text style={styles.smallText}>First name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="John"
          onChangeText={firstName => setFirstName(firstName)}
          defaultValue={firstName}
        />
        <Text style={styles.smallText}>Last name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Smith"
          onChangeText={lastName => setLastName(lastName)}
          defaultValue={lastName}
        />
        <PrimaryButton
          onPress={() => Add({firstName, lastName})}
          text="Save Lead"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddLeads;
