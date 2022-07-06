import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './views/navigation/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './views/screens/HomeScreen';
import Hotels from './views/screens/Hotels';
import ContactUs from './views/screens/ContactUs';
import FAQ from './views/screens/FAQ';
import ReviewAndRating from './views/screens/ReviewAndRating';
import DetailsScreen from './views/screens/DetailsScreen';
import productreview from './views/screens/productreview';
import Tailors from './views/screens/Tailors';
import Decor from './views/screens/Decor';
import DSDecor from './views/screens/DSDecor';
import DSTailor from './views/screens/DSTailor';
import Rdecor from './views/screens/Rdecor';
import Rhotels from './views/screens/Rhotels';
import Rtailors from './views/screens/Rtailors';
import HRform from './views/screens/HRform';
import TRform from './views/screens/TRform';
import DRform from './views/screens/DRform';
import TailorReviews from './views/screens/TailorReviews';
import HotelReviews from './views/screens/HotelReviews';
import DecorReviews from './views/screens/DecorReviews';
import justhotels from './views/screens/justhotels';
//import cartScreen from './views/screens/cartScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: 'orange',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="One Stop Event Arrangements"
        component={HomeScreen}
        options={{
          headerStyle:{
            backgroundColor:"orange"
          },
          drawerIcon: ({color}) => (
            
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Review and Rating"
        component={ReviewAndRating}
        options={{
          headerStyle:{
            backgroundColor:"orange"
          },
          drawerIcon: ({color}) => (
            <Ionicons name="star-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQ}
        options={{
          headerStyle:{
            backgroundColor:"orange"
          },
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          headerStyle:{
            backgroundColor:"orange"
          },
          drawerIcon: ({color}) => (
            <Ionicons name="call-outline" size={22} color={color} />
          ),
        }}
      />
        <Drawer.Screen
        name="Hotels"
        component={Hotels}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />

       <Drawer.Screen
        name="Tailors"
        component={Tailors}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
       <Drawer.Screen
        name="Decor"
        component={Decor}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="Rdecor"
        component={Rdecor}
        options={{
          title:'Decor',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="Rhotels"
        component={Rhotels}
        options={{
          title:'Hotels',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="Rtailors"
        component={Rtailors}
        options={{
          title:'Tailors',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
      <Drawer.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
        <Drawer.Screen
        name="DSDecor"
        component={DSDecor}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
        <Drawer.Screen
        name="DSTailor"
        component={DSTailor}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
    <Drawer.Screen
        name="seeAllreviews"
        component={productreview}
        options={{
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
        <Drawer.Screen
        name="HRform"
        component={HRform}
        options={{
          title:'Review This Hotel',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
          <Drawer.Screen
        name="TRform"
        component={TRform}
        options={{
          title:'Review This Tailor ',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="DRform"
        component={DRform}
        options={{
          title:'Review This Decor Shop',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="TailorReviews"
        component={TailorReviews}
        options={{
          title:'All Tailor Reviews',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="HotelReviews"
        component={HotelReviews}
        options={{
          title:'All Hotel Reviews',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
         <Drawer.Screen
        name="DecorReviews"
        component={DecorReviews}
        options={{
          title:'All Decor Reviews',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
      <Drawer.Screen
        name="justhotels"
        component={justhotels}
        options={{
          title:'Reviews on this Hotel',
          drawerLabel: () => null,
          headerStyle:{

            backgroundColor:"orange"
          },
          drawerActiveBackgroundColor:()=>null,
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  ); 
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
