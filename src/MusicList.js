import React from 'react';
import { View } from 'react-native';
import {
	Content,
	List,
	Spinner
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
                  <MusicItem 
										key={index}
										musicName={value.name}
										musicImageURI={value.artworkUrl100}
										artistName={value.artistName}
									/>
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