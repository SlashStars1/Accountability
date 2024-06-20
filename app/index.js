
import {View, Text} from 'react-native'; //view is like a div
import { Link } from 'expo-router';
const Home = () =>{
    return (
        <View> 
            <Text>Home!</Text>
            <Link href="/setup">Get Started</Link>
        </View>
    )
}
export default Home;