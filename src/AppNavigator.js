import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  state = {
    photos: []
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/photos/99', {
    //   method: 'DELETE'
    // })
    //   .then(response => console.log(response.json()))
      // .then(json => {
      //   console.log(json)
      //   fetch('https://jsonplaceholder.typicode.com/photos')
      //     .then(response => response.json())
      //     .then(json => {
      //       console.log(json)
      //       this.setState({
      //         photos: json
      //       })
      //     })
      // })
    // fetch('http://localhost:3000/results/1436781869', {
    //   method: 'DELETE'
    // })

    // fetch('http://localhost:3000/results')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     this.setState({
    //       photos: json
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  render() {
    console.log(this.state.photos)
    return (
<View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>  
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
