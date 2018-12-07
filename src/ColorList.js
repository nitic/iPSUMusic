import React from 'react';
import {
	List
} from 'native-base';
import ColorItem from './ColorItem';

const initialStates = {
	data: []
}

export default class MusicList extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialStates;
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		await fetch('http://localhost:3000/colors')
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
					data: jsonData
				})
       })
      .catch((error) => {
        console.error(error)
      });
	}

	render() {
		const { data } = this.state;

		return (
			<List>
			{
				data.map((value, index) => {
					return (
						<ColorItem 
							key={index}
							colorName={value.color}
							hexCode={value.hexcode}
						/>
					)
				})
			}						
			</List>
		)
	}
}