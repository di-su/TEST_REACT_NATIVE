import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServicesScreen from './src/pages/services';
import SettingsScreen from './src/pages/settings';
import LeadsScreen from './src/pages/leads';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Leads" component={LeadsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
