import React, {useState} from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native';

export const Header = () => {

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);

  var styleText = styles.text;
  if(isEnabled){
    var styleText = StyleSheet.flatten([
      styles.text,
      styles.textColorBlue
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styleText}>Reto 3!</Text>
      <Switch 
        style={styles.switch}
        trackColor={{false: '#767577', true: '#fff'}}
        thumbColor={isEnabled ? '#f5dd4b' : 'f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'gray',
      paddingTop: 15,
    },
    text: {
      textAlign: 'center',
      color: 'white',
      padding: 10,
      flex : 7 //Repaso FLEX
    },
    textColorBlue:{
      color: 'blue',
    },
    switch:{
      flex : 1,
    }
  });