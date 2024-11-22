import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { styles } from '../styles';
import { calculateAveragePrice } from '../utils';

const HomeScreen = ({ menuItems, setMenuItems }) => {
  const averageStarterPrice = calculateAveragePrice(menuItems, 'starter');
  const averageMainPrice = calculateAveragePrice(menuItems, 'main');
  const averageDessertPrice = calculateAveragePrice(menuItems, 'dessert');

  const removeMenuItem = (name) => {
    setMenuItems(menuItems.filter(item => item.name !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Christoffel's Menu</Text>
      <Text>Average Starter Price: ${averageStarterPrice}</Text>
      <Text>Average Main Price: ${averageMainPrice}</Text>
      <Text>Average Dessert Price: ${averageDessertPrice}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - {item.course}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
            <Button
              title="Remove"
              onPress={() => removeMenuItem(item.name)}
              color="#FF4C4C"
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
