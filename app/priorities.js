import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

export default function priorities() {

    const [goalOne, setGoalOne] = useState('');
    const [goalTwo, setGoalTwo] = useState('');
    const [goalThree, setGoalThree] = useState('');

  return (
    <View>
      <Text>Set priorities.</Text>
        <Text>Type in one goal for the day in each box.</Text>
      <Text>1</Text><TextInput></TextInput>
      <Text>2</Text><TextInput></TextInput>
      <Text>3</Text><TextInput></TextInput>
      <TouchableOpacity >Submit</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})