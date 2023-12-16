import {Text, TouchableOpacity, Button, View, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../Components/KSpacer";
import KCard from "../Components/KCard";

const dadCard = [{
    image: "https://nala.ro/media/catalog/product/cache/1a569b18b45a89b56aa19d7c3cca6c3b/1/8/1822_2.jpg",
    title: "Set CADOU Extra Hidratare",
    price: "Pret: 106,90 RON",
    brand: "Nala"

},
    {
        image: "https://cdn.dc5.ro/img-prod/1924736153-0-240.png",
        title: "Set cana cu lingurita si coaster",
        price: "Pret: 139 RON",
        brand: "Luuk"
    },
    {
        image: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt1f7538f09cc673ba/60dc284e2446e93b5b6612be/seymour_phantom-20574-42mm_1.jpg?format=pjpg&auto=webp&quality=75%2C90&width=640",
        title: "CEAS PHANTOM SEYMOUR",
        price: "Pret: 239,50 RON",
        brand: "Seizmont"
    },
]
function DadScreen() {
    const navigator = useNavigation();
    return (
        <View style={{flex:1,backgroundColor:'#BD3634'}}>
            <ScrollView contentContainerStyle={{flexGrow:1,alignItems:'center'}}>
                <KSpacer h={40}/>
                <View style={{flexDirection:'row', justifyContent:'center',width:'100%'}}>
                    <TouchableOpacity onPress={() => navigator.navigate('HomeScreen')}
                                      style={{alignItems:'center'}}>

                    </TouchableOpacity>
                    <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'center',color: '#FFFFFF'}}>Gifts recommendations: </Text>
                </View>
                <KSpacer h ={10}/>
                {
                    dadCard.map(card =>
                        <>
                            <KCard image={card.image} title={card.title} price={card.price} brand={card.brand} />
                            <KSpacer h={16}/>
                        </>
                    )
                }

            </ScrollView>
        </View>
    );
}
export default DadScreen;