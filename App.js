/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Platform } from 'react-native';
import {
  Container,
  Header,
  Body,
  Text,
  Content
} from 'native-base';
import ColorList from './src/ColorList';

export default class App extends Component {  
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text style={{ color:  Platform.OS === 'android' && '#FFF' }}>Color List</Text>
          </Body>
        </Header>
        <Content>
          <ColorList />
        </Content>
      </Container>
    );
  }
}
