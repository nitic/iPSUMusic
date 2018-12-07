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
		
	}

	render() {
		return (
			<List>
		
			</List>
		)
	}
}