import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const handleWebView = () => {
    console.log('handleWebView pressed');
    navigation.navigate('WebviewScreen');
  };

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleWebView}>
        <Text style={styles.textStyle}>웹뷰로 이동</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
