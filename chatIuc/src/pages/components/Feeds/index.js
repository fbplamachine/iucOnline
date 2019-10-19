import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Feed from './feed';

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Feed />
      </View>
    );
  }
}
