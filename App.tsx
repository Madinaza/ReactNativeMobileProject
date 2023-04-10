/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import Logo from './assets/Menu.svg';
import {Image, StyleSheet, Text, View} from 'react-native';
import BarMenu from './assets/Menu.svg';
import Search from './assets/search.svg';
import ShopCart from './assets/Vector.svg';
import FirstIcon from './assets/Group 17.svg';
import Arrow from './assets/Vector 3.svg';
import Bowl from './assets/Rice bowl.svg';
import ThirdIcon from './assets/Group.svg';
import LastIcon from './assets/Group (1).svg';
// import { Image } from 'react-native-svg';

const App = () => {
  return (
    <View style={[styles.mainView]}>
      <View
        style={[
          styles.justifyContent,
          styles.padding,
          styles.row,
          {paddingTop: 20},
        ]}>
        <BarMenu></BarMenu>
        <View style={[styles.row]}>
          <Search style={{marginRight: 25}}></Search>
          <ShopCart></ShopCart>
        </View>
      </View>
      <View style={{paddingLeft: 25, marginTop: -20}}>
        <Text style={[styles.Title, styles.row]}>DELICIOUS FOOD</Text>
        <Text style={[styles.supTitle]}>AT YOUR DOOR STEPS</Text>
      </View>
      <View
        style={[
          styles.row,
          styles.justifyContent,
          {marginTop: 10},
          styles.padding,
        ]}>
        <View style={[styles.iconBack]}>
          <FirstIcon></FirstIcon>
        </View>
        <View style={[styles.iconActive]}>
          <Bowl></Bowl>
        </View>
        <View style={[styles.iconBack]}>
          <ThirdIcon></ThirdIcon>
        </View>
        <View style={[styles.iconBack]}>
          <LastIcon></LastIcon>
        </View>
      </View>
      <View style={[styles.row, styles.justifyContent, {marginTop: 20}]}>
        <View
          style={{
            position: 'relative',
            alignItems: 'center',
            width: 200,
            marginLeft: 10,
          }}>
          <Image
            style={[{marginLeft: 30}, styles.card]}
            source={require('./assets/images/image2.png')}></Image>
          <View
            style={[
              styles.row,
              styles.overlay,
              {justifyContent: 'space-between', width: '100%'},
            ]}>
            <Text
              style={[
                styles.overlayProp,
                {width: 123, textAlign: 'center', left: 30},
              ]}>
              $180.35
            </Text>
            <Text
              style={[styles.overlayProp, {width: 34, textAlign: 'center'}]}>
              +
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              height: 280,
              width: 150,
            }}
            source={require('./assets/images/image3.png')}></Image>
          <View
            style={[
              styles.row,
              styles.overlay,
              {justifyContent: 'space-between', width: '100%'},
            ]}>
            <Text
              style={[
                styles.overlayProp,
                {width: 123, textAlign: 'center', left: 20},
              ]}>
              $50.50
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={[styles.padding, styles.Text, {fontWeight: '900'}]}>
          Popular <Text style={{fontWeight: '300'}}>Now</Text>
        </Text>

        <View
          style={[
            styles.row,
            styles.justifyContent,
            styles.border,
            {alignItems: 'center'},
          ]}>
          <Image source={require('./assets/images/Rectangle11.png')}></Image>
          <View>
            <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
              Chicken Manchurian
            </Text>
            <Text style={{fontSize: 10}}>Chinese Cuisine</Text>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 18,
                color: 'black',
                marginTop: 15,
              }}>
              $110.50
            </Text>
          </View>
          <View style={styles.arrowIcon}>
            <Arrow style={styles.arrowIcon}></Arrow>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#f2f3f8',
    flex: 1,
  },
  padding: {
    padding: 25,
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  Title: {
    paddingTop: 50,
    fontSize: 33,
    fontWeight: '800',
    color: '#333333',
    lineHeight: 31,
  },
  supTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
  },
  iconBack: {
    backgroundColor: '#fff',
    width: 66,
    height: 66,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: '#4E5156',
    width: 66,
    height: 66,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 280,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
  },
  overlayProp: {
    backgroundColor: '#4E5156',
    color: '#fff',
    fontSize: 18,
    padding: 5,
    borderRadius: 5,
    fontWeight: '600',
  },
  Text: {
    fontSize: 25,
    color: '#333333',
  },
  border: {
    borderWidth: 2,
    borderColor: '#828282',
    borderRadius: 10,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  arrowIcon: {
    backgroundColor: '#4E5156',
    padding:10,
    borderRadius:8,
  },
});
export default App;
