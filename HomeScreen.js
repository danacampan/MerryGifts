import {Text, TouchableOpacity, Button, View } from 'react-native';
import KSpacer from "./Components/KSpacer";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F28C6E',
            padding:20,
            flexDirection: 'column',

        }}>
            <KSpacer h={50}/>
            <Text style={{fontFamily: 'serif',fontSize: 24, fontWeight: 'bold', color: '#FFFFFF'}}>Choose the special person you want to give a gift to:</Text>
            <KSpacer h={30}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={()=> navigator.navigate('Mom')}>
                    <View style={{
                        height: 150,
                        width: 150,
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderRadius: 10,
                        borderColor: '#FFF7CE',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#76BC6A',
                    }}>
                        <Text style={{fontFamily: 'serif',fontSize: 24,}}>Mom</Text>
                    </View>
                </TouchableOpacity>
            <KSpacer h={30}/>
                <TouchableOpacity>
                    <View style={{
                        height: 150,
                        width: 150,
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderRadius: 10,
                        borderColor: '#FFF7CE',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#76BC6A',
                    }}>
                        <Text style={{fontFamily: 'serif',fontSize: 24,}}>Dad</Text>
                    </View>
                </TouchableOpacity>
            </View>
                <KSpacer h={30}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity>
                <View style={{
                    height: 150,
                    width: 150,
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    borderColor: '#FFF7CE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#76BC6A',
                }}>
                    <Text style={{fontFamily: 'serif',fontSize: 24,}}>Brother</Text>
                </View>
                </TouchableOpacity>
                <KSpacer h={30}/>
                <TouchableOpacity>
                <View style={{
                    height: 150,
                    width: 150,
                    borderWidth: 2,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    borderColor: '#FFF7CE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#76BC6A',
                }}>
                    <Text style={{fontFamily: 'serif', fontSize: 24,}}>Sister</Text>
                </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default HomeScreen;