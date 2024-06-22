import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DashboardScreen from './DashboardScreen';
import { Alert, Image } from 'react-native';
import { images } from '../utils/constants/assets';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { fonts } from '../utils/constants/fonts';
import { colors } from '../utils/constants/colors';
import BottomTabButton from '../components/BottomTabButton';
import { useNavigation, useNavigationState, RouteProp } from '@react-navigation/native';
import { NAVIGATIONS } from '../utils/constants/navigationConstants';
import SurfingScreen from './SurfingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const navigation = useNavigation();
    const navigationState = useNavigationState(state => state);

    
    return (
        <Tab.Navigator screenOptions = {{
           tabBarStyle : {
            height : 60
           },
            headerTitle: props => (
                <Image source={images.aloha} style = {{ marginBottom : 25, alignSelf : 'center' }} />
            ),
            headerTitleAlign : 'center',
            headerStatusBarHeight : 30
       
        }}>
            <Tab.Screen name ={NAVIGATIONS.HOME}
            options={{
                tabBarButton: (props) => (
                  <BottomTabButton 
                  isSelected={props.accessibilityState?.selected} 
                  title={NAVIGATIONS.HOME} 
                  iconPath={images.home_icon} {...props} />
                ),
               }}
                 component={DashboardScreen} />

            <Tab.Screen name ={NAVIGATIONS.SURFING} 
            options={{
                tabBarButton: (props) => (
                  <BottomTabButton 
                  isSelected={props.accessibilityState?.selected} 
                  title={NAVIGATIONS.SURFING} 
                  iconPath={images.surfing_icon} {...props} />
                ),
            
               }}
            component={SurfingScreen} />

            <Tab.Screen name ={NAVIGATIONS.HULA}
             options={{
                tabBarButton: (props) => (
                  <BottomTabButton 
                  isSelected={props.accessibilityState?.selected} 
                  title={NAVIGATIONS.HULA}
                  iconPath={images.hula_icon} {...props} />
                ),
               }}
            component={DashboardScreen} />

            <Tab.Screen name ={NAVIGATIONS.VOLCANO}
             options={{
                tabBarButton: (props) => (
                  <BottomTabButton 
                  isSelected={props.accessibilityState?.selected} 
                  title={NAVIGATIONS.VOLCANO}
                  iconPath={images.volcano_icon} {...props} />
                ),
               }}
            component={DashboardScreen} />
        </Tab.Navigator>
    )
}

const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName="TabNavigator" >
            <Stack.Screen 
             options = {{
                headerShown : false
            }}
            name='TabNavigator' component={TabNavigator} options={{ headerShown : false }} />
        </Stack.Navigator>
    )
}

export default HomeStack