import React from 'react';
import {Image,StyleSheet,Text,TouchableOpacity,View, TextInput,ScrollView,SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactUs=({navigation})=> {
    const [getquery, setquery] = React.useState('');

  const firebaseUrl =
    'https://mobileproject-020-default-rtdb.firebaseio.com/';

  const sendReview = () => {


    console.log('Adding');

    var requestoptions = {
      method: 'POST',
      body: JSON.stringify({
        query: getquery,
        
      }),
    };

    fetch(`${firebaseUrl}/ContactUs.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
      
    setquery('')
    

  };

  
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
              <Text style={{textAlign:'center',fontSize:25,marginTop:35,marginRight:170,color:'white'}}>Contact Us</Text>
              <Text style={{fontSize: 14, color:'grey', marginTop: 2,}}>             Feel Free</Text>
              </View>
              <Image
              style={{
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -89,
              }}
              source={{
               uri: 'https://cdn-icons.flaticon.com/png/512/3188/premium/3188213.png?token=exp=1641324688~hmac=847b4493029878f904fd1b57c882a8fa',
              }}
            />
      
      </View>

        <View style={{ margin: 5, padding: 18, marginTop: 18 }}>
            <Text style={{color:'orange', fontSize:15}}>Write your query here Sir!</Text>
            <Text> </Text>
          <TextInput
           style={styles.textinput}
            placeholder="  Any problem.."
            value={getquery}
            onChangeText={setquery}
          />
         
        </View>
        <TouchableOpacity
          style={styles.sendbtn}
        onPress={sendReview}>
          <Text style={{color:'white',textAlign:'center',padding:10,fontSize:20}}>Send</Text>
        </TouchableOpacity>
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
    height: 200,
    width: 380,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius:30,
    borderColor:'orange',
    
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
 
export default ContactUs