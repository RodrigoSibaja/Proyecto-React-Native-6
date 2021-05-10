import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView, Image } from 'react-native';

export default class calculateRoute extends Component{
  constructor () { 
    super();
    this.state = {showImage: false};
  }

  showImageFunc = () => {
     this.setState({showImage: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        <TextInput
          style={stylesTextInput.textInput}
        />
      </View>
        {this.state.showImage &&
        <View style={styles.middle}>
          <Image
            style={{width: 270 , height: 375}}
            source={{
              uri: 'http://pm1.narvii.com/7274/04cd093750e53c5c8e751f3a5d47020533c2951er1-556-750v2_uhq.jpg',
            }} />
        </View>}
        <View style={styles.bottom}>
          <Button
            style={stylesTextInput.textInput}
            onPress={this.showImageFunc}
            title="   Search   "
            color="#841584"
          />
        </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
  },
  middle: {
    flex: 1,
  },
  bottom: {
    flex: 0.2,
  },
});

const stylesTextInput = StyleSheet.create({
  padding: 30,
  container: {
    flex: 1,
    padding: 15,
  },
  textInput:{
    height: 40,
    textAlign: 'center', 
    borderColor: '#156cdb', 
    borderWidth: 2,
  }
});
