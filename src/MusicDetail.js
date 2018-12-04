import React from 'react';
import {
	StyleSheet,
	View,
	Image
} from 'react-native';
import {
	Container,
	Content,	
	Text
} from 'native-base';

export default class MusicDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songImage: '',
			songName: '',
			artist: '',
		}
	}

	async fetchData(musicId) {
		return await fetch(`http://localhost:3000/results/${musicId}`)
      .then(response => response.json())
      .then(jsonData => {
				console.log(jsonData);
				return jsonData;
      })
      .catch((error) => {
        console.error(error)
      });
	}

	render() {
		const { navigation } = this.props;

		const songTitle = navigation.getParam('songTitle');
		const songImage = navigation.getParam('songImage');
		const album = navigation.getParam('album');
		const genres = navigation.getParam('genres');				
		
		return (
			<Container>
				<Content padder>
					<View style={{ flex: 8 }}>
						<Image 
							style={styles.imageSong}
							source={{uri: songImage}}
						/>
					</View>
					<View style={{ flex: 4 }}>
						<View style={{alignItems: 'center'}}>
							<Text style={{color: '#d63031', fontSize: 24, lineHeight: 48}}>{songTitle}</Text>
						</View>
						<View style={styles.detail}>
							<Text style={styles.label}>Album</Text>
							<Text>{album}</Text>
						</View>
						<View style={styles.detail}>
							<Text style={styles.label}>Genres</Text>
							<Text>{genres}</Text>
						</View>
					</View>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	imageSong: {
		height: 250,
		width: '100%',
	},
	detail: {
		marginBottom: 10
	},
	label: {
		color: '#636e72'
	}
})