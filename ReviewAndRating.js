import React from 'react'
import { View, Text, SafeAreaView, ScrollView ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from '../colors';
import CartScreen from './cartScreen';
const Stack = createNativeStackNavigator();
const ReviewAndRating=({navigation})=>{
  
  

  return(
    <View  >
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10,paddingTop:20,color:'orange',textAlign:'center'}}>
              Review The Vendors
            </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <View style={styles.buttons}>
             <TouchableOpacity onPress={()=>navigation.navigate('Rhotels')}>
               <View>
              <Text style={{textAlign:'center',fontSize:30,marginTop:35,marginRight:170,color:'white'}}>Hotels</Text>
              </View>
              <Image
              style={{
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -69,
              }}
              source={{
               uri: 'https://cdn-icons-png.flaticon.com/512/1475/1475996.png',
              }}
            />
      
      </TouchableOpacity>
      </View>
      <Text> </Text>
      <Text> </Text>
      <View style={styles.buttons}>
  <TouchableOpacity onPress={()=>navigation.navigate('Rtailors')}>
              <Text style={{textAlign:'center',fontSize:30,marginTop:35,marginRight:170,color:'white'}}>Tailors</Text>
              <Image
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -69,
              }}
              source={{
                uri: 'https://cdn-icons.flaticon.com/png/512/2175/premium/2175729.png?token=exp=1641240664~hmac=69e8e23e2040e381fdb8229491cb93f5',
       
              }}
            />
      </TouchableOpacity>
     
      </View>
      <Text> </Text>
      <Text> </Text>
      <View style={styles.buttons}>
             <TouchableOpacity onPress={()=>navigation.navigate('Rdecor')}>
              <Text style={{textAlign:'center',fontSize:30,marginTop:35,marginRight:170,color:'white'}}>Decor</Text>
              <Image
              style={{
                resizeMode: 'cover',
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -69,
              }}
              source={{
                uri: 'https://cdn-icons.flaticon.com/png/512/4233/premium/4233692.png?token=exp=1641240727~hmac=f806862cc7c4aeeb56547c85563cc815',
       
              }}
            />
      </TouchableOpacity>
      </View>
          </View>
          
  )
}



const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttons:{
    width:350,
    marginLeft:30,
    borderWidth:2,
    borderRadius:15,
    height:145,
    padding:10,
    backgroundColor:'orange',
    borderColor:'orange'
    



  },
});

export default ReviewAndRating

