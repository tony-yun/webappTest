import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WebviewScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>WebviewScreen</Text>
    </View>
  );
};

export default WebviewScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
  },
});
