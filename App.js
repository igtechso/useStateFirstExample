import React,{useState} from 'react';
import { StyleSheet,View,Text,Button} from 'react-native';

const App = () => {

  const [name, setName] = useState('IGT')

  const onClickHandler = () =>{
    setName('This is the React Native useState First Example')
  }
  
  return(
    <View style = {styles.body}>
    <Text style={styles.text}>{name}</Text>
    <Button title="useState" onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    body:{
      flex: 1,
      backgroundColor: 'ff00ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontSize: 32,
    }
  }
)

export default App;