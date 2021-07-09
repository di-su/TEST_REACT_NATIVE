import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ServicesScreen from './src/pages/services';
import TextScreen from './src/pages/text';
import LeadsScreen from './src/pages/leads';
import Icon from 'react-native-ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Leads" component={LeadsScreen} />
        <Tab.Screen name="Text" component={TextScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
