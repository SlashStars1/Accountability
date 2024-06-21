import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

export default function priorities() {

    const [goalOne, setGoalOne] = useState('');
    const [goalTwo, setGoalTwo] = useState('');
    const [goalThree, setGoalThree] = useState('');
    const [message, setMessage] = useState(''); 

    const validate=()=>{
        if (goalOne==='' || goalTwo==='' || goalThree===''){
            setMessage("Error. Please enter a value in all 3 of the inputs")
        }
        else{
            setMessage("Success! Come back later to check of your priorities.")
            //hide button
        }
    }

  return (
    <View>
      <Text>Set priorities.</Text>
        <Text>Type in one goal for the day in each box. Once you sucessfully submit you CANNOT change your answers.</Text>
      <Text>1</Text><TextInput onChangeText={newText => setGoalOne(newText)}></TextInput>
      <Text>2</Text><TextInput onChangeText={newText => setGoalTwo(newText)}></TextInput>
      <Text>3</Text><TextInput onChangeText={newText => setGoalThree(newText)}></TextInput>
      <TouchableOpacity onPress={validate}>Submit</TouchableOpacity>
      {message!=="" && (<Text>{message}</Text>)}
    </View>
  )
}

