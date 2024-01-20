/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle}>웹뷰로 이동</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default App;
