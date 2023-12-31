import {Text, TouchableOpacity, Button, View, ScrollView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import KSpacer from "../Components/KSpacer";
import KCard from "../Components/KCard";

const momCard = [{
    image: "https://cdn13.avanticart.ro/edenboutique.ro/pictures/bratara-din-argint-fixa-honey-bee-47355-4.webp",
    title: "Bratara din argint fixa",
    price: "Pret: 166 RON",
    brand: "Honey Bee"

},
    {
        image: "https://nala.ro/media/catalog/product/cache/1a569b18b45a89b56aa19d7c3cca6c3b/1/6/1654-3.jpg",
        title: "Set CADOU Baie și Răsfăț - Grapefruit",
        price: "Pret: 102,90 RON",
        brand: "Nala"
    },
    {
        image: "https://mobexpert.ro/cdn/shop/products/Dona_20copy.jpg?v=1676302622",
        title: "Set veselă, porțelan, 20 piese",
        price: "Pret: 234,50 RON",
        brand: "DONNA"
    },
]
function MomScreen() {
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
                    momCard.map(card =>
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
export default MomScreen;