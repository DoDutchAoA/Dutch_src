import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image,
  Navigator
} from 'react-native';

 

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          });
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded ) {
      return (<Text>Loading...</Text>);
    }
    else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Text> Name: {item.name} | UserName: {item.username} | Email: {item.email} </Text>
              </li>

              ))};
          </ul>
        </div>
        );
    }


  }
}