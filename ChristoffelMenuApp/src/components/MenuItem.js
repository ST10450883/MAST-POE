import React from 'react';
import { View, Text, Button } from 'react-native';

const MenuItem = ({ item, onRemove }) => (
  <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
    <Text>{item.name} - {item.course} - ${item.price}</Text>
    <Button title="Remove" onPress={() => onRemove(item.name)} />
  </View>
);

export default MenuItem;
