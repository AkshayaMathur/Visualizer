import React, {Component} from 'react';
import {Platform} from 'react-native';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
class BaseView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={'#fff'}
          barStyle="dark-content"
        />
        <View style={styles.content}>{this.props.children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 9,
    backgroundColor: '#fff',
  },
});
export default BaseView;
