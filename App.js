import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constans';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MovieDetails';
import Profil from './src/Components/profil';
import Daftar from './src/Components/Daftar';
import EditProfil from './src/Components/EditProfil';
import PrivacyPolicy from './src/Components/PrivacyPolicy';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Awal from './src/Components/awal';
import Login from './src/Components/login';
import Otp from './src/Components/otp';
import Explore from './src/Components/explore';
import DetailMovie from './src/Components/detailmovie';
import MyList from './src/Components/mylist';
import Notification from './src/Components/notification';
import Security from './src/Components/security';
import Help from './src/Components/helpcenter';
import Share from './src/Components/share';
import Notifmovie from './src/Components/notificationmovie';
import PopUp from './src/Components/popupmodal';
import CreatePass from './src/Components/newpass';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Language from './src/Components/language';

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="My List"
        component={MyList}
        options={{
          headerShown: false,
          tabBarLabel: 'My List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifmovie}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={MainApp} options={headerStyle}/>
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Edit Profil" component={EditProfil} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="Profil" component={Profil} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="awal" component={Awal} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="login" component={Login} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="daftar" component={Daftar} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="otp" component={Otp} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="DetailMovie" component={DetailMovie} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="Notification" component={Notification} options={headerStyle}/>
        <Stack.Screen name="Security" component={Security} options={headerStyle}/>
        <Stack.Screen name="Language" component={Language} options={headerStyle}/>
        <Stack.Screen name="Help" component={Help} options={headerStyle}/>
        <Stack.Screen name="Share" component={Share} options={headerStyle}/>
        <Stack.Screen name="CreatePass" component={CreatePass} options={headerStyle}/>
        <Stack.Screen name="PopUp" component={PopUp} options={headerStyle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title : 'Movies',
  headerStyle : {backgroundColor :Constants.baseColor},
  headerTitleStyle : {color : Constants.textColor},
  headerLeft : () => <Icon name='notifications' size={25} color={Constants.textColor}/>,
  headerRight : () => <Icon name='search' size={25} color={Constants.textColor}/>,
}

export default App;