import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PeopleTab from '../screens/People/PeopleTab';
import PostTab from '../screens/Post/PostTab';
import CreatePost from '../screens/Post/CreatePost';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarLabelStyle: {fontSize: 12},
        tabBarIndicatorStyle: {height: 0},
        // tabBarItemStyle: {
        //   borderRadius: 15,
        //   marginVertical: 5,
        //   marginHorizontal: 20,
        // },
        swipeEnabled: false,
        tabBarStyle: {elevation: 0},
      }}>
      <Tab.Screen
        // options={({selected}) => ({
        //   tabBarLabelStyle: {
        //     borderWidth: selected && 1,
        //     borderRadius: 15,
        //     backgroundColor: selected ? '#EFEFEF' : '#FFF',
        //   },
        // })}
        name="People"
        component={PeopleTab}
      />

      <Tab.Screen
        // options={({selected}) => ({
        //   tabBarItemStyle: {
        //     borderWidth: selected && 1,
        //     borderRadius: 15,
        //     backgroundColor: selected ? '#EFEFEF' : '#FFF',
        //   },
        // })}
        name="Posts"
        component={PostTab}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainTab} />
        <Stack.Screen
          options={() => ({navigationBarHidden: true})}
          name="Create"
          component={CreatePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
