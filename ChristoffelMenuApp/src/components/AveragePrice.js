import React from 'react';
import { View, Text } from 'react-native';

const AveragePrice = ({ menuItems }) => {
  const getAveragePriceByCourse = (course) => {
    const courseItems = menuItems.filter((item) => item.course === course);
    if (courseItems.length === 0) return 0;
    const total = courseItems.reduce((sum, item) => sum + item.price, 0);
    return (total / courseItems.length).toFixed(2);
  };

  return (
    <View>
      <Text>Average Price of Starters: ${getAveragePriceByCourse('starter')}</Text>
      <Text>Average Price of Mains: ${getAveragePriceByCourse('main')}</Text>
      <Text>Average Price of Desserts: ${getAveragePriceByCourse('dessert')}</Text>
    </View>
  );
};

export default AveragePrice;
