import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Image from './Image';
import Actions from './Actions';
import Likes from './Likes';
import Comments from './Comments';
import Time from './Time';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View>
        <Header />
        <Image />
        <Actions />
        <Likes />
        <Comments />
        <Time />
        <Text>Time</Text>
      </View>
    );
  }
}
