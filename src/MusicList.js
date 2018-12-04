import React from 'react';
import { 
	StyleSheet
} from 'react-native';
import {
	Content,
	List,
	ListItem,
	Left,
	Body,
	Right,
	Text,
	Thumbnail,
	Spinner,
	Icon
} from 'native-base';

const initialStates = {
	isReady: false,
	data: []
}

export default class MusicList extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialStates;
	}	

	static navigationOptions = {
    title: 'Music List'
  };

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		await fetch('http://localhost:3000/results')
      .then(response => response.json())
      .then(jsonData => {
        this.setState({ 
					isReady: true,
					data: jsonData 
				})
       })
      .catch((error) => {
        console.error(error)
      });
	}

	render() {
		const { data, isReady } = this.state;

		return (
      <Content>
        {
          !isReady ? (            
            <Spinner color="red" />
          ) : (
            <List>
            {
              data.map((value, index) => {
                return (
                  <ListItem key={index} thumbnail style={styles.item}>
                    <Left>
                      <Thumbnail square source={{ uri: value.artworkUrl100 }} />
                    </Left>
                    <Body>
                      <Text>{value.name}</Text>
                      <Text note>{value.artistName}</Text>
                    </Body>
                    <Right>
                      <Icon type="SimpleLineIcons" name="arrow-right" />
                    </Right>
                  </ListItem>
                )
              })
            }						
            </List>
          )
        }					
      </Content>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFFFFF'
	}
})