import React from 'react';
import {
  NavigationContainer,
  createStackNavigator,
  TransitionPresets,
} from '../libraries';
import {DemoScreen, HomeScreen, EditScreen} from '../screens';
import {NAVIGATION_DEMO, NAVIGATION_HOME, NAVIGATION_EDIT} from '../constants';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({}) => ({
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
        })}>
        <Stack.Screen name={NAVIGATION_DEMO} component={DemoScreen} />
        <Stack.Screen name={NAVIGATION_HOME} component={HomeScreen} />
        <Stack.Screen name={NAVIGATION_EDIT} component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;