import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {LeadsData} from '../../resources/db/db.json';
import styles from '../../resources/styles/styles';

// Receive params and render LeadsProfile
function LeadsProfile({route}) {
  const lead = LeadsData.find(lead => lead.id === route.params.id);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Text style={[styles.bigTextWhite, styles.title]}>Profile</Text>
        <Text style={styles.bigTextWhite}>ID: {route.params.id}</Text>
        <Text style={styles.bigTextWhite}>{lead.firstname}</Text>
        <Text style={styles.bigTextWhite}>{lead.surname}</Text>
      </View>
    </SafeAreaView>
  );
}

export default LeadsProfile;
