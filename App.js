import React,{useState} from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native'
const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
        <TextInput 
          autoCorrect={true} 
          spellCheck={false} 
          style={styles.input}
          placeholder="Type Todo"
          ></TextInput>
        </View>
        <View>
        <TouchableOpacity onPress={()=>{console.log("Hello")}}>
          <Text style={styles.addbtn}>Add</Text>
        </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Text>Hii</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'

  },
  box:{
     marginVertical:5,
     flexWrap:'wrap',
     flexDirection:'row',
     alignSelf:'center',
  },
  addbtn:{
    backgroundColor:'blue',
    color:'white',
    padding:15
    
  },
  input:{
    borderWidth:1,
    width:200,
    marginHorizontal:5
  }
})
export default App;
