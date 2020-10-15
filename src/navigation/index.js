import React, { useState } from 'react'
import { Dimensions, Image, useWindowDimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon, Avatar, Card, Header } from 'react-native-elements'
//import {useSelector} from 'react-redux'
import Landing from '../screens/Landing'
import Cinema from '../screens/Cinema'
import Acceuil from '../screens/Accueil'
import DetailEvent from '../screens/DetailEvent'
import BonPlans from '../screens/BonPlans'
import Theatre from '../screens/Theatre'
import Visites from '../screens/Visites';
import Music from '../screens/Music';
import Galeries from '../screens/Galeries';
import JeunePublic from '../screens/JeunePublic';
import MapSvg from '../components/MapSvg'
import Settings from '../screens/Settings'
import { useSelector } from 'react-redux';
import GalerieEvent from '../components/GalerieEvent'
import Organisateur from '../components/Organisateur';
import Headerr from '../components/common/Header'
import Home from '../screens/Home'
import News from '../screens/News'
import Profile from '../screens/Profile'


//Tab top navigation contain 3 components
const Tab = createMaterialTopTabNavigator();

function MyTabsTop() {
  return (
    <Tab.Navigator

      swipeEnabled={false}  >
      <Tab.Screen name="Resume" component={DetailEvent} />
      <Tab.Screen name="Galerie" component={GalerieEvent} />
      <Tab.Screen name="Organisateurs" component={Organisateur} />
    </Tab.Navigator>
  );
}




//Bottom navigation 

const TabBottom = createBottomTabNavigator();
function TabNavigation() {

  return (
    <TabBottom.Navigator initialRouteName={"HomeApp"} 
    tabBarOptions={{
      activeTintColor: '#ff3300', inactiveTintColor: 'white' ,labelStyle:{fontWeight:'bold'} ,tabStyle:{paddingBottom:2,backgroundColor:'#008cd6'}
    }}
    >
        <TabBottom.Screen name={"Home"} component={Acceuil }
        options={{
                  tabBarIcon: ({ color, size, focused }) => (<Icon name='home' type='font-awesome' color={color} size={focused ? 28 : 21} />)
        }}
      />

      <TabBottom.Screen name={"Actualités"} component={News}
        options={{
          tabBarIcon: ({ color, size, focused }) => (<Icon name='file' type='font-awesome' color={color} size={focused ? 30 : 21} />)
        }}
      />
       <TabBottom.Screen name={"Profile"} component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (<Icon name='user' type='font-awesome' color={color} size={focused ? 30 : 21} />)
        }}
      />
      
    </TabBottom.Navigator>
  );
}

//Stack navigator 
const Stack = createStackNavigator();

function AccueilStack() {
  //contient le nom de la categorie
  const isCategorie = useSelector(state => state.Skip.isCategorie)

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="Accueil"
      //header personnalise pour detail event screen
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <Headerr nav={navigation} centerIcon={isCategorie} />
          );
        }
      }}
    >
      <Stack.Screen name="Accueil" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="MapSvg" component={MapSvg} options={{ headerShown: false }} />
      <Stack.Screen name="Cinema" component={Cinema} options={{ headerShown: false }} />
      <Stack.Screen name="Galeries" component={Galeries} options={{ headerShown: false }} />
      <Stack.Screen name="JeunePublic" component={JeunePublic} options={{ headerShown: false }} />
      <Stack.Screen name="Theatre" component={Theatre} options={{ headerShown: false }} />
      <Stack.Screen name="BonPlans" component={BonPlans} options={{ headerShown: false }} />
      <Stack.Screen name="Visites" component={Visites} options={{ headerShown: false }} />
      <Stack.Screen name="Music" component={Music} options={{ headerShown: false }} />

      <Stack.Screen name="Details" component={MyTabsTop}
        options={{ headerShown: true }}
      />

    </Stack.Navigator>
  );
}




//Drawer navigation
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Card
        // img={require('../../assets/logo2.png')}
         />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={AccueilStack} options={{ drawerIcon: () => <Icon name="home" type='fontisto' size={19} /> }} />
      {/* <Drawer.Screen name="connexion" component={Landing} options={{ drawerIcon: () => <Icon name="home" type='fontisto' size={19} /> }} /> */}
      <Drawer.Screen name="Settings" component={Settings} options={{ drawerIcon: () => <Icon name="player-settings" type='fontisto' size={19} /> }} />

    </Drawer.Navigator>
  );
};




//navigation
export default function Navigation() {
  const skip = useSelector(state => state.Skip.isSkip)
  // const isCategorie = useSelector(state => state.Skip.isCategorie)
  // console.log("index isCategorie ",isCategorie)
  console.log("inedx skip", skip)
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none"  >
        {skip
          ?
          <Stack.Screen name="app" component={DrawerNavigation} />
          :
          <Stack.Screen name="Landing" component={Landing} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}




// const Tab = createBottomTabNavigator();
// function TabNavigation() {

//   return (
//     <Tab.Navigator initialRouteName={"Cinéma"} tabBarOptions={{
//       activeTintColor: '#e91e63', inactiveTintColor: 'white' ,labelStyle:{fontWeight:'bold'} ,tabStyle:{paddingBottom:5,backgroundColor:'#2F292D'}
//     }}>
//         <Tab.Screen name={"bons plans"} component={BonPlans}
//         options={{
//                   tabBarIcon: ({ color, size, focused }) => (<Icon name='star' type='font-awesome' color={color} size={focused ? 28 : 19} />)
//         }}
//       />

//       <Tab.Screen name={"Cinéma"} component={CinemaStack}
//         options={{
//           //tabBarVisible:false,
//           tabBarIcon: ({ color, size, focused }) => (<Icon name='film' type='font-awesome' color={color} size={focused ? 28 : 19} />)
//         }}
//       />
//        <Tab.Screen name={"Théâtre"} component={Theatre}
//         options={{
//           tabBarIcon: ({ color, size, focused }) => (<Icon name='bank' type='font-awesome' color={color} size={focused ? 28 : 19} />)
//         }}
//       />
//        <Tab.Screen name={"Festivals"} component={Festivals} 
//         options={{
//           tabBarIcon: ({ color, size, focused }) => (<Icon name='building' type='font-awesome' color={color} size={focused ? 28: 19} />),
//         }}
//       />

//     </Tab.Navigator>
//   );
// }