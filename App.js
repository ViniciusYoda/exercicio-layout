import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText1: {
    color: 'white',
    fontSize: 14,
  },
  headerText2: {
    color: 'white',
    fontSize: 26,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  weather: {
    flexDirection: 'column',
  },
  temperatureText: {
    color: 'white',
    fontSize: 48,
    marginRight: 10,
  },
  weatherImage: {
    width: 100,
    height: 100,
  },
  weatherText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  iconContainer: {
    backgroundColor: '#708090',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  iconText: {
    color: 'white',
  },
  aqiContainer: {
    backgroundColor: '#006400',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    margin: 10,
    borderRadius: 30,
  },
  aqiText: {
    color: 'white',
  },
  aqiValue: {
    color: '#2e8b57',
    marginRight: 10,
    fontSize: 40,
  },
  sendButton: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    width: 80,
    borderRadius: 10
  },
  sendButtonText: {
    color: 'white',
  },
 todayText: {
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  scrollView: {
    marginTop: 10,
  },
weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'gray', 
  },
  weatherCardImage: {
    width: 50, 
    height: 50, 
  },
    cardTemperature: {
    color: 'white',
    fontSize: 24, 
  },
  cardTime: {
    color: 'white',
    fontSize: 16, 
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText1}>25, setembro 2023</Text>
        <Text style={styles.headerText2}>São Paulo, SP</Text>
        <View style={styles.weatherInfo}>
          <View style={styles.weather}>
          <Text style={styles.temperatureText}>22º</Text>
          <Text style={styles.weatherText}>Cloudy</Text>
          </View>
          <Image source={require('./sol.png')} style={styles.weatherImage} />
        </View>
        
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconItem}>
          <Image source={require('./icone1.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>14 Km</Text>
        </View>
        <View style={styles.iconItem}>
          <Image source={require('./icone2.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>226</Text>
        </View>
        <View style={styles.iconItem}>
          <Image source={require('./icone3.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>59%</Text>
        </View>
      </View>

      <Text style={styles.aqiText}>AQI</Text>
      <View style={styles.aqiContainer}>
        
        
          <Text style={styles.aqiValue}>36</Text>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        
      </View>

      <Text style={styles.todayText}>Today</Text>
      <ScrollView style={styles.scrollView}>

        <View style={styles.weatherCard}>
          <Image source={require('./sol.png')} style={styles.weatherCardImage} />
          <Text style={styles.cardTemperature}>25º</Text>
          <Text style={styles.cardTime}>10 p.m</Text>
        </View>
      </ScrollView>

      <View style={styles.iconContainer}>
        <Image source={require('./icone4.png')} style={styles.iconImage} />
        <Image source={require('./icone1.png')} style={styles.iconImage} />
        <Image source={require('./icone6.png')} style={styles.iconImage} />
        <Image source={require('./icone7.png')} style={styles.iconImage} />
      </View>
    </View>
  );
};

export default App;
