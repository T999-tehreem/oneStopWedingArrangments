import React from 'react'
import { View, Text,Dimensions,FlatList,TouchableHighlight,Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../colors';

import hotel from '../tailor';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Rtailors = ({navigation}) => {
  const Card = ({hotel}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.3}
        onPress={() => navigation.navigate('TRform', hotel)}>
        <View style={style.card}>
          <View style={{alignItems: 'center',}}>
          <Image source={hotel.image} style={{height: 120, width: 120}} /> 
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{hotel.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {hotel.type}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'gold'}}>
            <Icon name="star" size={25} color='gold' />{hotel.rating}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };  
  return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} color={'orange'} onPress={()=>{navigation.navigate('Review and Rating')}} />
        <Text style={{fontSize: 20,color:'orange', fontWeight: 'bold'}}>Reviews</Text>
      </View>
        <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={hotel}
        renderItem={({item}) => <Card hotel={item} />}
      />
      </View>
    )
  }
  const style = StyleSheet.create({
    header: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:-280
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
    
  
    },
    card: {
      height: 220,
      width: cardWidth,
      marginHorizontal: 10,
      marginBottom: 5,
      marginTop: 50,
      borderRadius: 18,
      elevation: 13,
      backgroundColor:'orange',
    },
  });
  
  export default Rtailors