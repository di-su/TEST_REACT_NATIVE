import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../../resources/styles/styles';
import GetServicesFromApi from './getServicesFromApi';
import {createStackNavigator} from '@react-navigation/stack';
import ServiceProfile from './serviceProfile';

const Stack = createStackNavigator();

function Services({navigation}) {
  const services = GetServicesFromApi();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={[styles.bigText, styles.title]}>Services</Text>
      <ScrollView>
        {services.slice(0, 8).map(service => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: 'ServiceProfile',
              });
            }}
            key={service.id}>
            <View style={styles.serviceBlock}>
              <Image style={styles.serviceImage} source={{uri: service.url}} />
              <Text
                onPress={() => {
                  navigation.navigate({
                    name: 'ServiceProfile',
                  });
                }}
                style={styles.smallerText}>
                {service.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function ServicesScreen() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* Render leads component */}
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="ServiceProfile" component={ServiceProfile} />
      </Stack.Navigator>
    </>
  );
}

export default ServicesScreen;
