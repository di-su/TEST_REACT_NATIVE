import * as React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import LeadsProfile from './leadsProfile';
import {createStackNavigator} from '@react-navigation/stack';
import {LeadsData} from '../../resources/db/db.json';
import styles from '../../resources/styles/styles';
import AddLeads from './addLeads';
import PrimaryButton from '../../components/atoms/primaryButton';

const Stack = createStackNavigator();

// Show all leads component
function Leads({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={[styles.bigText, styles.title]}>Leads</Text>
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
        <PrimaryButton
          onPress={() => {
            // Invoke AddLeads component
            navigation.navigate({
              name: 'AddLeads',
            });
          }}
          text="Add Leads"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function LeadsScreen() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* Render leads component */}
        <Stack.Screen name="Leads" component={Leads} />
        <Stack.Screen name="LeadsProfile" component={LeadsProfile} />
        <Stack.Screen name="AddLeads" component={AddLeads} />
      </Stack.Navigator>
    </>
  );
}

export default LeadsScreen;
