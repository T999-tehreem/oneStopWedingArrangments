import React from 'react';
import {Image,StyleSheet,Text,TouchableOpacity,View, TextInput,ScrollView,SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FAQ=({navigation})=> {
    

  
  return (

    <SafeAreaView>
    <ScrollView>
    <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} color={'orange'} onPress={()=>{navigation.navigate('One Stop Event Arrangements')}} />
        <Text style={{fontSize: 20,color:'orange', fontWeight: 'bold',marginRight:90}}>Home</Text>
      </View>
        <Text> </Text>
    <View style={styles.buttons}>
               <View>
              <Text style={{textAlign:'center',fontSize:30,marginTop:15,marginRight:170,color:'white'}}>FAQs</Text>
              <Text style={{fontSize: 14, color:'grey', marginTop: 2,}}>Your Question Our Answers</Text>
              </View>
              <Image
              style={{
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -79,
              }}
              source={{
               uri: 'https://cdn-icons.flaticon.com/png/512/2608/premium/2608208.png?token=exp=1641325737~hmac=020cddb6f6aa5836a1b4a9542d001ac6',
              }}
            />
      
      </View>

        <View style={{ margin: 5, padding: 18, marginTop: 18 }}>
            <Text style={{color:'orange', fontSize:15}}>Customer Service? </Text>
            <View style={styles.textinput}>
          <Text style={{color:'white',fontSize:15,marginLeft:20,marginTop:15}}> 
             Yes 24/7 Customer Support
          </Text>
          </View>
          <Text style={{color:'orange', fontSize:15}}>How many days shop is open? </Text>
            <View style={styles.textinput}>
          <Text style={{color:'white',fontSize:15,marginLeft:20,marginTop:15}}> 
             Open 24/7
          </Text>
          </View>
          <Text style={{color:'orange', fontSize:15}}>Do you provide delivery service? </Text>
            <View style={styles.textinput}>
          <Text style={{color:'white',fontSize:15,marginLeft:20,marginTop:15}}> 
             Hell No!
          </Text>
          </View>
          <Text style={{color:'orange', fontSize:15}}>Can I get Refund? </Text>
            <View style={styles.textinput}>
          <Text style={{color:'white',fontSize:15,marginLeft:20,marginTop:15}}> 
             Yes but we have terms and conditions
          </Text>
          </View>
          <Text style={{color:'orange', fontSize:15}}>Is Vendor accountable? </Text>
            <View style={styles.textinput}>
          <Text style={{color:'white',fontSize:15,marginLeft:20,marginTop:15}}> 
             Yes we always keep checking
          </Text>
          </View>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7bd3f7',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    margin: 20,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:250
  },
  inputText: {
    padding: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
  buttons:{
    width:350,
    marginLeft:30,
    borderWidth:2,
    borderRadius:15,
    height:145,
    padding:10,
    backgroundColor:'orange',
    borderColor:'orange',
  },
  textinput:{
    borderWidth: 1,
    height: 60,
    width: 380,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius:30,
    borderColor:'orange',
    backgroundColor:'orange'
  },
  post:{
    backgroundColor: `#008080`,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 220,
    marginTop: 10,  
  },
  sendbtn:{
    width:100,height:50, borderWidth:2,borderRadius:20,borderColor:'orange',backgroundColor:'orange',
    marginTop:-30,
    alignSelf:'center'
  }
});
 
export default FAQ