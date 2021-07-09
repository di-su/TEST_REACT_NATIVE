import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from '../../resources/styles/styles';

function ServiceProfile() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Service Profile</Text>
    </SafeAreaView>
  );
}

export default ServiceProfile;
