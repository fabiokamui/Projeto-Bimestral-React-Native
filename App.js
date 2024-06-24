// App.js
import React, { useState } from 'react';
import { View, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import SettingsScreen from './screen/SettingScreen';
import ProfileScreen from './screen/ProfileScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Details':
        return <DetailsScreen />;
      case 'Settings':
        return <SettingsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };


  return (
    <View style={styles.container}>
        <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      <View style={styles.navigation}>
        <Button title="Home" onPress={() => setCurrentScreen('Home')} />
        <Button title="Details" onPress={() => setCurrentScreen('Details')} />
        <Button title="Settings" onPress={() => setCurrentScreen('Settings')} />
        <TouchableOpacity style={styles.profileButton} onPress={() => setCurrentScreen('Profile')}>
          <Image
            source={require('/home/TAVORA/Área de trabalho/React/Projeto-Bimestral-React-Native/assets/gojo.jpg')}
            style={styles.profileButtonImage}
          />
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#550055',
    position: 'absolute',
    bottom: 1,
    left: 1,
    right: 1,
  },
  screenContainer: {
    flex: 1,
  },
  profileButton: {
    backgroundColor: '#4CAF50',
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButtonImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});


export default App;
