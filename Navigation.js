import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import MomScreen from "./screens/MomScreen";
import DadScreen from "./screens/DadScreen";

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name={'Mom'} component={MomScreen} options={{headerShow:false}}/>
            <Stack.Screen name={'Dad'} component={DadScreen} options={{headerShow:false}}/>
        </Stack.Navigator>
    )
}
export default Navigation;