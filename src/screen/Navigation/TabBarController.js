import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SongListContainer from '../../redux/container/SongListContainer';
import songDetail from '../screensComponent/SongDetail';
import { strings, colors,images} from '../Constant'
const songStack = createStackNavigator();

function songStackScreen() {
  return (
    <songStack.Navigator screenOptions={{headerShown: false}}>
      <songStack.Screen
        name={strings.songList}
        component={SongListContainer}
        options={{headerShown: false}}
      />
      <songStack.Screen
        name={strings.songDetail}
        component={songDetail}
        options={{headerShown: false}}
      />
    </songStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default class TabBarControl extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName;
            if (route.name === strings.songList) {
              iconName = focused
                ? images.menuActive
                : images.menuInactive;
            } 
            // You can return any component that you like here!
            return <Image source={iconName} resizeMode='contain' />;
          },
        })}
        // initialRouteName={strings.songList}
        tabBarOptions={{
          activeTintColor: colors.white,
          inactiveTintColor:colors.gray,
          style: {
            backgroundColor: colors.black, //color you want to change
            borderTopWidth: 0,
          },
        }}>
           <Tab.Screen
          name={strings.songList}
          component={songStackScreen}
          options={{unmountOnBlur: true}}
        />
      </Tab.Navigator>
    );
  }
}
