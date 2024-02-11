import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const handleWebView = () => {
    console.log('handleWebView pressed');
    navigation.navigate('WebviewScreen');
  };

  return (
    <View style={styles.mainView}>
      {/* <LottieView
        source={require('../res/selling.json')}
        style={{width: '100%', height: '100%'}}
        autoPlay
        loop
      /> */}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonStyle: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  textStyle: {
    fontSize: 17,
    color: 'white',
  },
});
