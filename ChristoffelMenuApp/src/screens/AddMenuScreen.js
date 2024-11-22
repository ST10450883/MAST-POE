import React, { useState } from 'react';
import { View, TextInput, Button, Picker } from 'react-native';
import { styles } from '../styles';
import { generateUniqueId } from '../utils';

const AddMenuScreen = ({ menuItems, setMenuItems }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('starter');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: generateUniqueId(),
      name,
      course,
      price
    };
    setMenuItems([...menuItems, newItem]);
    setName('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
      />
      <Button
        title="Add Menu Item"
        onPress={handleAddItem}
        color="#007BFF"
      />
    </View>
  );
};

export default AddMenuScreen;
