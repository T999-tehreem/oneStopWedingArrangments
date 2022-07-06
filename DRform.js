import React from 'react';
import {Image,StyleSheet,Text,TouchableOpacity,View, TextInput,ScrollView,SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DRform=({navigation,route})=> {
    const item=route.params;
    const [getreview, setreview] = React.useState('');
    const [getCooperative, setcooperative] = React.useState('');
    const [gettime, settime] = React.useState('');
    const [getrating, setrating] = React.useState('');
    const [getsuggestion, setsuggestion] = React.useState('');

  const firebaseUrl ='https://mobileproject-020-default-rtdb.firebaseio.com/';

  const sendReview = () => {


    console.log('Adding');

    var requestoptions = {
      method: 'POST',
      body: JSON.stringify({
        Review: getreview,
        Cooperation: getCooperative,
        Time: gettime,
        Rating: getrating,
        Suggestion: getsuggestion,
        Name:item.name,
        Id:item.id
      }),
    };

    fetch(`${firebaseUrl}/DecorReview.json`, requestoptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
      
    setreview('')
    setsuggestion('')
    settime('')
    setrating('')
    setcooperative('')

  };

  
  return (

    <SafeAreaView>
    <ScrollView>
    <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} color={'orange'} onPress={()=>{navigation.navigate('Rdecor')}} />
        <Text style={{fontSize: 20,color:'orange', fontWeight: 'bold',marginRight:90}}>Decor</Text>
      </View>
        <Text> </Text>
    <View style={styles.buttons}>
               <View>
                   <Text style={{color:'black'}}>Review</Text>
              <Text style={{textAlign:'center',fontSize:30,marginTop:15,marginRight:170,color:'white'}}>{item.name}</Text>
              <Text style={{fontSize: 14, color:'grey', marginTop: 2,}}>              {item.type}</Text>
              </View>
              <Image
              style={{
                height: 100,
                width: 100,
                marginLeft: 200,
                marginTop: -89,
              }}
              source={{
               uri: 'https://cdn-icons-png.flaticon.com/512/1475/1475996.png',
              }}
            />
      
      </View>

        <View style={{ margin: 5, padding: 18, marginTop: 18 }}>
            <Text style={{color:'orange', fontSize:15}}>Write your Review here </Text>
          <TextInput
           style={styles.textinput}
            placeholder="  Very good service.."
            value={getreview}
            onChangeText={setreview}
          />
          <Text style={{color:'orange', fontSize:15}}>Is Vendor Cooperative? </Text>
          <TextInput
           style={styles.textinput}
            placeholder="   Yes/No or any complaint"
            value={getCooperative}
            onChangeText={setcooperative}
          />
        <Text style={{color:'orange', fontSize:15}}>Everything delievered on time by vendor? </Text>
          <TextInput
            style={styles.textinput}
            placeholder="    Yes/No or any complaint "
            value={gettime}
            onChangeText={settime}
          />
          <Text style={{color:'orange', fontSize:15}}>Rate the Vendor </Text>
          <TextInput
          keyboardType='numeric'
          style={styles.textinput}
            placeholder="   any number between 1-5 "
            value={getrating}
            // onChangeText={setrating}
            onChangeText={
                (text)=>{
                  if(text>5 || text<=0){
                    alert("Rating must be between 1-5");
                  }
                  else if (text>=1)
                    setrating(text);
                 
                }
              }
          />
          <Text style={{color:'orange', fontSize:15}}>Any Suggestion?</Text>
          <TextInput
            style={styles.textinput}
            placeholder="   Vendor needs to improve.. "
            value={getsuggestion}
            onChangeText={setsuggestion}
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
    height: 80,
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
 
export default DRform