import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ menuItems, setMenuItems }) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: "Christoffel's Menu" }}>
        {(props) => <HomeScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
      </Stack.Screen>
      <Stack.Screen name="AddMenuItem">
        {(props) => <AddMenuScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
      </Stack.Screen>
      <Stack.Screen name="FilterMenu">
        {(props) => <FilterMenuScreen {...props} menuItems={menuItems} />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
