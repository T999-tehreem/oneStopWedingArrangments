import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,FlatList,Dimensions,TouchableHighlight} from 'react-native';
const {width} = Dimensions.get('screen');
const productreview = ({navigation,route}) => {
   const Item=route.params;
  //const [search, setSearch] = useState('');
  const [array, setarray] = useState([]);
 // const [filtered, setFilterted] = useState('');
 // const [f, setf] = useState('');

  const { n } = route.params != undefined ? route.params : {};
  const [getcondition, setcondition] = React.useState(true);

  const getproduct = () => {
    fetch(
      'https://mobileproject-020-default-rtdb.firebaseio.com/',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((responsejson) => {
        let samplearray = [];
        for (key in responsejson) {
          if (array.length == 0) {
            samplearray.push(responsejson[key]);
          } else {
            samplearray.push(responsejson[key]);
          }
        }
        setarray(samplearray);

        setcondition(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    getproduct();
  }, []);

  const updateSearch = (search) => {
    const d = array.filter((item) => {
      return item.Name.match(search);
    });

    setSearch(search);
    setFilterted(d);
  };
  if (getcondition) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />

        <Text>Waiting for response</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 4,
        margin: 4,
        backgroundColor: '#fffafd',
      }}>
      <Text></Text>
      <View style={{ flex: 1 }}>
        <View style={styles.view}>
          <SearchBar
            placeholder="Search Here..."
            onChangeText={updateSearch}
            platform="android"
            value={search}
          />
        </View>

        <View>
          <View style={{ padding: 8, margin: 8 }}>
            <Text style={styles.text2}>All Makeup Products</Text>
          </View>

          <FlatList
            style={{ marginBottom: 80, width: '100%' }}
            data={
              filtered.length > 0
                ? filtered
                : array && array
                ? array.filter((item) => item.Category.match(n))
                : null
            }
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={styles.row}>
                  <View style={styles.carts}>
                    <Image
                      style={styles.productImg}
                      source={{
                        uri: item.uri,
                      }}
                    />
                    <View>
                      <Text style={styles.prdtext1}>{item.Name}</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.prdtext2}>Rs {item.Price}</Text>

                      <TouchableOpacity
                        style={{
                          backgroundColor: '#EC255A',
                          width: 30,
                          height: 30,
                          borderRadius: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: 7,
                        }}
                        onPress={() => {
                          navigation.navigate('Item', {
                            product: item,
                          });
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};
 export default productreview

// import React from 'react';
// import {SafeAreaView, StyleSheet, View, Text, Image,FlatList,Dimensions,TouchableHighlight} from 'react-native';
// import COLORS from '../colors';
// import hotels from '../hotels';
// const {width} = Dimensions.get('screen');
// const cardWidth = width / 2 - 20;
// const productreview = ({route}) => {
//    const Item=route.params;
//     const Card = () => (
//        <View>
//            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
//                 {Item.name}
//               </Text>
//        </View>
//       );


// return (

// <SafeAreaView style={style.container}>
//     <FlatList
//     showsVerticalScrollIndicator={false}
//     data={hotels}
//     renderItem={({item}) => <Card hotels={item} />}
//   />
// </SafeAreaView>
    
//   );
// };

// const style = StyleSheet.create({
//   header: {
//     paddingVertical: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//   },
//   container: {
//     flex: 1,
//   },
//   details: {
//     paddingHorizontal: 20,
//     paddingTop: 40,
//     paddingBottom: 60,
//     backgroundColor:'orange',
//     borderTopRightRadius: 40,
//     borderTopLeftRadius: 40,
//   },
//   iconContainer: {
//     backgroundColor: COLORS.white,
//     height: 50,
//     width: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 30,
//   },
//   detailsText: {
//     marginTop: 10,
//     lineHeight: 22,
//     fontSize: 16,
//     color: COLORS.white,
    
//   },
//   header: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginLeft:-250
//   },
//   inputContainer: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     flexDirection: 'row',
//     backgroundColor: COLORS.light,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   sortBtn: {
//     width: 50,
//     height: 50,
//     marginLeft: 10,
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   categoriesListContainer: {
//     paddingVertical: 30,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   categoryBtn: {
//     height: 45,
//     width: 120,
//     marginRight: 7,
//     borderRadius: 30,
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     flexDirection: 'row',
//   },
//   categoryBtnImgCon: {
//     height: 35,
//     width: 35,
//     backgroundColor: COLORS.white,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   addToCartBtn: {
//     height: 30,
//     width: 30,
//     borderRadius: 20,
//     backgroundColor: COLORS.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   buttons:{
//     width:350,
//     marginLeft:30,
//     borderWidth:2,
//     borderRadius:15,
//     height:145,
//     padding:10,
//     backgroundColor:'orange',
  

//   },
//   card: {
//     height: 220,
//     width: cardWidth,
//     marginHorizontal: 10,
//     marginBottom: 5,
//     marginTop: 50,
//     borderRadius: 18,
//     elevation: 13,
//     backgroundColor:'orange',
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });



// export default productreview
