import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Storie from '../components/stories';
import Feeds from '../components/Feeds';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Storie />
          <Feeds />
      </View>
    );
  }
}
