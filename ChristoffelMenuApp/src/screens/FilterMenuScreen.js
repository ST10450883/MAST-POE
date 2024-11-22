import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { styles } from '../styles';

const FilterMenuScreen = ({ menuItems }) => {
  const [filter, setFilter] = useState('');
  const filteredItems = menuItems.filter((item) =>
    item.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.filterInput}
        placeholder="Filter by Course"
        value={filter}
        onChangeText={setFilter}
      />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
            <Text>{item.course}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FilterMenuScreen;
