import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text,View,SafeAreaView,FlatList,} from 'react-native';
const justhotels= ({route}) => {
    const Item=route.params;
  const [array, setarray] = useState([]);
  const [getcondition, setcondition] = React.useState(true);
  const [arrayID, setarrayID] = useState([]);


  const getReview = () => {
    fetch(
      'https://mobileproject-020-default-rtdb.firebaseio.com/HotelReview.json',
      
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((responsejson) => {
        let arr = [];
        let arrID = [];
        for (key in responsejson) {
          if (array.length == 0) {
            
            arr.push(responsejson[key]);
            arrID.push(key);
          } else {
           
            arr.push(responsejson[key]);
            arrID.push(key);
          }
        }
        setarray(arr);
        setarrayID(arrID);
        

        setcondition(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getReview();
  }, []);
  if (getcondition) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        

        <Text>Waiting for response</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white',height:'100%' }}>
     
      
        <View>
          <View style={{ margin: 10 }}>
            <FlatList
              data={array}
              renderItem={({ item, index }) => {
                return (
                    
                  <View style={{alignItems:'center'}}>
                      
                    <View
                      style={styles.box}>
                    <Text style={styles.text}>Hotel ID:{item.Id}</Text>
                    <Text style={styles.text}>Hotel Name:{item.Name}</Text>
                      <Text style={styles.text}>Review:{item.Review}</Text>
                      <Text style={styles.text}>Rating:{item.Rating}</Text>
                      <Text style={styles.text}>On Time:{item.Time}</Text>
                      <Text style={styles.text}>Cooperative Vendor:{item.Cooperation}</Text>
                      <Text style={styles.text}>Suggestion:{item.Suggestion}</Text>
                   
                     
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold', color:'white' ,
        fontSize:15
    },
    box:{
        backgroundColor: 'orange',
         height: 250,
         width: 350,
        borderWidth: 1,
        marginLeft: 8,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10,
        borderColor:'orange'
    }

})

export default justhotels