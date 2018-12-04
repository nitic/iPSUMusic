import React from 'react';
import {
  StyleSheet,
  Dimensions,
	View,
	Image
} from 'react-native';
import {
	Content,	
	Text
} from 'native-base';

export default class MusicDetail extends React.Component {
  
  static navigationOptions = {
    title: 'Music Detail'
  };

	render() {
		const { navigation } = this.props;

		const songTitle = navigation.getParam('songTitle');
		const songImage = navigation.getParam('songImage');
		const album = navigation.getParam('album');
		const genres = navigation.getParam('genres');				
		
		return (			
      <Content>
        <View style={styles.imageSection}>
          <Image 
            style={styles.imageSong}
            source={{uri: songImage}}
          />
        </View>
        <View style={styles.detailSection}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{songTitle}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Album</Text>
            <Text style={styles.detail}>{album}</Text>
          </View>
          <View style={styles.detailRow}>        
            <Text style={styles.label}>Genres</Text>
            <Text style={styles.detail}>{genres}</Text>
          </View>
        </View>
      </Content>			
		)
	}
}

const styles = StyleSheet.create({
  imageSection: {
    flex: 1
  },
  detailSection: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
	imageSong: {
		height: Dimensions.get('window').height * 0.35,
    width: undefined
  },
  titleRow: {    
    paddingTop: 10,
    paddingBottom: 10
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#d63031', 
    fontSize: 24, 
    lineHeight: 28
  },
	detailRow: {
		marginBottom: 10
	},
	label: {
    color: '#636e72',
    fontSize: 16
  },
  detail: {
    fontSize: 16
  }
})