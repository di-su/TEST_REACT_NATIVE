import * as React from 'react';
import {View, Text} from 'react-native';
import {LeadsData} from '../../resources/db/db.json';
import styles from '../../resources/styles/styles';

// Receive params and render LeadsProfile
function LeadsProfile({route}) {
  const lead = LeadsData.find(lead => lead.id === route.params.id);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.bigTextWhite}>ID: {route.params.id}</Text>
      <Text style={styles.bigTextWhite}>{lead.firstname}</Text>
      <Text style={styles.bigTextWhite}>{lead.surname}</Text>
    </View>
  );
}

export default LeadsProfile;
