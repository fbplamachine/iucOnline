import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Story from './Story';

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={style.headerStorie}>
          <Text style={styles.headerText}> Histories </Text>
          <Text style={styles.headerText}><Icon name="caret-right" size={14} color="#222"/>Assistance</Text>
        </View>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentScrollView}
        >
          <Story visualized user='fbplamachien'/>
          <Story user='Messi'/>
          <Story user='CR7'/>
          <Story user='Neymar'/>
          <Story visualized user='Davido'/>
          <Story user='Dj.Arafat'/>
          <Story user='Kerojen'/>
          <Story visualized user='Nyam'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStorie: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222'
  },
  contentScrollView: {
    paddingHorizontal: 3,
  },
});
