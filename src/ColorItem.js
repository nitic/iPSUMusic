import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Text,
  ListItem,
  Left,
  Body
} from 'native-base';

const ColorItem = ({ colorName, hexCode, ...props }) => (
  <ListItem thumbnail {...props} style={styles.item}>
    <Left>
      <View style={[styles.colorBlock, {backgroundColor: hexCode}]} />
    </Left>
    <Body>
      <Text>{colorName}</Text>
      <Text note>{hexCode}</Text>
    </Body>
  </ListItem>
)
export default ColorItem;

const styles = StyleSheet.create({
  colorBlock: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#EAEAEA'
  },
	item: {
		backgroundColor: '#FFFFFF'
	}
})