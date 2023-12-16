import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name={'Mom'} component={MomScreen} options={{headerShow:false}}/>
        </Stack.Navigator>
    )
}
export default Navigation;