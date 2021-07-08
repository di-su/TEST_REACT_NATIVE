import * as React from 'react';
import {ScrollView, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import LeadsProfile from './leadsProfile';
import {createStackNavigator} from '@react-navigation/stack';
import {LeadsData} from '../../resources/db/db.json';
import styles from '../../resources/styles/styles';
import AddLeads from './addLeads';

const Stack = createStackNavigator();

// Show all leads component
function Leads({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {LeadsData.map(lead => (
          <Text
            onPress={() => {
              // Invoke LeadsProfile component & pass ID params
              navigation.navigate({
                name: 'LeadsProfile',
                params: {id: lead.id},
              });
            }}
            key={lead.id}
            style={styles.bigText}>
            {lead.firstname}
          </Text>
        ))}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            // Invoke AddLeads component
            navigation.navigate({
              name: 'AddLeads',
            });
          }}>
          <Text style={styles.mediumTextWhite}>Add Lead</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function LeadsScreen() {
  return (
    <>
      <Stack.Navigator>
        {/* Render leads component */}
        <Stack.Screen name="Leads" component={Leads} />
        <Stack.Screen name="LeadsProfile" component={LeadsProfile} />
        <Stack.Screen name="AddLeads" component={AddLeads} />
      </Stack.Navigator>
    </>
  );
}

export default LeadsScreen;
