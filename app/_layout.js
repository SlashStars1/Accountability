//layout route: import Stack and return it. The stack is used to link to all the pages in the app

import {Slot,Stack} from 'expo-router';

const Layout = () =>{
    return (<Stack>

        <Stack.Screen name="index"></Stack.Screen>
   </Stack>)
    ;
}
export default Layout;