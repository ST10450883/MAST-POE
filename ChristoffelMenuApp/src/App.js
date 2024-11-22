import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddMenuScreen from './components/AddMenuScreen';
import FilterMenuScreen from './components/FilterMenuScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  // State to manage the menu items throughout the app
  const [menuItems, setMenuItems] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home screen: displays the menu and average prices by course */}
        <Stack.Screen
          name="Home"
          options={{ title: "Christoffel's Menu" }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>

        {/* Screen for adding and removing menu items */}
        <Stack.Screen
          name="AddMenuItem"
          options={{ title: "Add Menu Item" }}
        >
          {(props) => (
            <AddMenuScreen
              {...props}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>

        {/* Screen for filtering the menu items by course */}
        <Stack.Screen
          name="FilterMenu"
          options={{ title: "Filter Menu by Course" }}
        >
          {(props) => (
            <FilterMenuScreen
              {...props}
              menuItems={menuItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
