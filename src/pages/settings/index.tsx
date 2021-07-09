import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from '../../resources/styles/styles';

function SettingsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Settings</Text>
    </SafeAreaView>
  );
}

export default SettingsScreen;
