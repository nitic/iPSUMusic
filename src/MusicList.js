import React from 'react';
import { View } from 'react-native';
import {
	Container,
	Header,
	Content,
	List,
	ListItem,
	Left,
	Body,
	Right,
	Button,
	Text,
	Thumbnail,
	Spinner,
	Icon
} from 'native-base';

export default class MusicList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isReady: false,
			data: []
		}
		this._handlePressViewDetail = this._handlePressViewDetail.bind(this);
	}	

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

	_handlePressViewDetail(itemId) {
		fetch(`http://localhost:3000/results/${itemId}`)
			.then(response => response.json())
			.then(jsonData => {
				let genresName = [];
				jsonData.genres.forEach(value => {
					genresName.push(value.name);
				});
				const data = {
					songTitle: jsonData.name,
					songImage: jsonData.artworkUrl100,
					album: jsonData.collectionName,
					genres: genresName
				}
				this.props.navigation.navigate('Detail', data);
			});		
	}

	render() {
		const { data, isReady } = this.state;

		return (
			<Container>
				<Content>
					{
						!isReady ? <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Spinner /></View> : (
							<List>
							{
								data.map((value, index) => {
									return (
										<ListItem key={index} thumbnail onPress={() => this._handlePressViewDetail(value.id)}>
											<Left>
												<Thumbnail square source={{ uri: value.artworkUrl100 }} />
											</Left>
											<Body>
												<Text>{value.name}</Text>
												<Text note numberOfLines={1}>{value.artistName}</Text>
											</Body>
											<Right>
												<Icon type="FontAwesome" name="chevron-right" />
											</Right>
										</ListItem>
									)
								})
							}						
							</List>
						)
					}					
				</Content>
			</Container>
		)
	}
}