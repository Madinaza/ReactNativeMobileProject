import React from 'react';
import Icon from './assets/Group 2.svg';
import { ImageBackground, StyleSheet, Text, View} from 'react-native';
const Home = () => {
  return (
    <View style={[styles.background]}>
      <View>
        <Text style={styles.heading}>
          ENJOY FRIED RICE -{'\n'}
          THE BEST MEAL
        </Text>
      </View>
      <View style={styles.icon}>
        <Icon></Icon>
      </View>
      <View>
        <ImageBackground
          style={{width: 360, height: 520, position: 'relative',
        bottom:0}}
          source={require('./assets/images/fri.png')}></ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f2f3f8',
    flex: 1,
  },
  heading: {
    fontSize: 47,
    fontWeight: '700',
    width: 307,
    lineHeight: 50,
    color: '#333333',
    position: 'relative',
    marginTop: 60,
    left: 20,
  },
  icon: {
    width: 70,
    height: 70,
    backgroundColor: '#4E5156',
    borderWidth: 0,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: '35%',
  },
});

export default Home;
