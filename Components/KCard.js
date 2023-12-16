import {Text, View, Image} from "react-native";
const KCard = ({image, title, price, brand}) => {
    return (

        <View style={{backgroundColor: '#3E4938',borderRadius: 10, flexWrap: 'wrap', width: '90%',shadowOpacity:0.2, padding: 8}}>
            <Image source={{uri: image}} style={{width: '100%', height: 150}}/>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFFFF'}}>{title}</Text>
            <Text style={{color: '#FFFFFF'}}>{price}</Text>
            <Text style={{color: '#FFFFFF'}}>{brand}</Text>
        </View>

    );
}
export default KCard;