import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              margin: 50,
            }}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/280/280950.png',
            }}
          />
          <Text style ={{
            fontSize: 30,
            textAlign: 'center'
          }}>Sign in to our system. Minions banana</Text>
        </View>
        <TextInput
          style={{
            margin: 15,
            height: 40,
            borderWidth: 1,
          }}
          placeholder="Enter your email"
        />
        <TextInput
          style={{
            margin: 15,
            height: 40,
            borderWidth: 1,
          }}
          placeholder="Enter your password"
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
