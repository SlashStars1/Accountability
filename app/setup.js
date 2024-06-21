import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

const setup = () => {

  //6 AM original time 
  const initialTime = new Date();
  initialTime.setHours(9);
  initialTime.setMinutes(30);

    const [time, setTime] = useState(initialTime);

      
    const onChange=(selectedTime)=>{
    

      const actualTime = selectedTime || initialTime; //in case the user wants the default time,
      setTime(actualTime);
    }
  return (
       

    <View>
      <Text>Setup</Text>
      <Text>What time do you want to be notified to set your 3 priorities for the day?</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={time }
        mode="time"
        display="default"
        onChange={onChange}
      />


      <TouchableOpacity>Submit</TouchableOpacity>
      <Link href="/priorities">Next</Link>
    </View>
  )
}

export default setup

const styles = StyleSheet.create({})