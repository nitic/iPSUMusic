/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
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
            <Text>Color List</Text>
          </Body>
        </Header>
        <Content>
          <ColorList />
        </Content>
      </Container>
    );
  }
}
