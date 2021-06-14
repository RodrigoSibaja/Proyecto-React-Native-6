/* Header para pantalla de creación de grupos */

import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export const Greetings = (props) => {
    
    var styleText = styles.text;
 
    return(
      <View style={styles.container}>  
        <Text style={styleText}>Create a Group {AddingText(props.someText)}</Text>
      </View>
    );
}

function AddingText(someText){
    return ' \nActive groups: ' + someText;
  }
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#0e5d77',  
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 10, 
    flex: 7,
  }
});