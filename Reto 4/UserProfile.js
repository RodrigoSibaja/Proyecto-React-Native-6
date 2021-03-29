import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button, Alert, FlatList} from 'react-native';
import {Feed} from './Feed';
import {App} from './App';

export const UserProfile = (props) => {
  
  const data = props.data; 

  const [text, onChangeText] = React.useState("");
  
  const [list, onChangeList] = useState(props.dataFeed);

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () =>{
      setIsFocus(!isFocus)
  }
  
  const _insertData=(text) =>{
      list.push({
      "_id": list.length+1,
      "name": data.name,
      "image": data.image,
      "description": text + parseInt(list.length+1),
      "like": false,
    });
    onFocus()
  }

  return(
    <>
    <View style={styles.container}>
      <Image 
        source={{ uri: data.image }}
        style={styles.imageIcon}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="What's your dog doing?"
        clearTextOnFocus={false}
        multiline
        numberOfLines={2}
        maxLength={80}
        textBreakStrategy='balanced'
        onChangeText={onChangeText}
        value={text}
        onFocus={() => onFocus()}
      />
    </View>
    <View style={styles.button}>
      { isFocus ? <Button title="Post" onPress={() => _insertData(text)} />  
                : null}
    </View>
    <FlatList 
      keyExtractor={ (item) => String(item['_id']) }
      data = {list}
      renderItem = { ({item}) =>(
        <Feed data={item}/>
      )}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput:{
    fontFamily: 'sans-serif-light',
    fontSize: 15,
    width: 330,
    color: 'black', 
  },
  imageIcon:{
    marginLeft: 5,
    marginRight: 5,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  button: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  }
});