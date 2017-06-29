import Lightbox from 'react-native-lightbox'
//import liraries
import React, { PureComponent } from 'react'
// import { StatusBar } from 'react-native'
// import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  Dimensions,
} from 'react-native'

import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import NewsPage from './pages/NewsPage'
import UserCenterPage from './pages/UserCenterPage'

// create a component
class RootScene extends PureComponent {

    props: {
        onSubmitEditing: Function,
        text: string,
        onChangeText: Function,
        onSubmit: Function,
      }

      state: {
        text: string
      }
    // constructor() {
    //     super()
    //
    //     StatusBar.setBarStyle('light-content')
    // }
      constructor(props) {
          super(props);
          this.state = { text: 'Useless Placeholder' };
          // console.log(`ListRequest - Success node:${this.requestNode}`);
      }

    onChangeText(text: string) {
        this.setState({ text: text });
        console.log(`onChangeText :${this.state.text} vs ${text}`);
        // this.props.onChangeText && this.props.onChangeText()
    }

    onSubmitEditing() {
        console.log(`onSubmitEditing :${this.state.text}`);
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.text);
        }
    }

    // onChangeText={(text) => { this.onChangeText(text) }}
    onSubmit() {
        console.log(`onSubmit :${this.state.text}`);
    }

    render() {
        return (
          <UserCenterPage />

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'powderblue',
  },
  red: {
    color: 'red',
  },
});

export default RootScene;
