import * as React from 'react';
import {SafeAreaView, ScrollView, Text, Image, View} from 'react-native';
import styles from '../../resources/styles/styles';
import GetServicesFromApi from './getServicesFromApi';

function ServicesScreen() {
  const services = GetServicesFromApi();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Services</Text>
      <ScrollView>
        {services.slice(0, 8).map(service => (
          <View style={styles.serviceBlock} key={service.id}>
            <Image style={styles.serviceImage} source={{uri: service.url}} />
            <Text
              // onPress={() => {
              //   // Invoke LeadsProfile component & pass ID params
              //   navigation.navigate({
              //     name: 'LeadsProfile',
              //     params: {id: lead.id},
              //   });
              // }}
              style={styles.smallerText}>
              {service.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ServicesScreen;
