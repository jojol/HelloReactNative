/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, { PureComponent, PropTypes } from 'react';
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

// create a component
class ImageItem extends PureComponent {


  props: {
      onSubmitEditing: Function
    }

    state: {
      error: string,
      loading: string,
      progress: number
    }

    constructor(props) {
        super(props);
        this.state = {
            error: "none",
            loading: "none",
            progress: 0
          };
        // console.log(`ListRequest - Success node:${this.requestNode}`);
    }

    onSubmitEditing() {
        console.log(`onSubmitEditing :${this.state.loading}`);
    }

  //,borderRadius:70,borderWidth:2
    render() {
        return (
          <Image
            source={{uri: 'https://seagm.github.io/react-test/images/hello-react.jpg'}}
            resizeMode={'stretch'}
            style={{width: 400, height: 400,opacity: 0.7}}
            onLoadStart={(e) => {
              this.setState({loading: 'started'});
              console.log('Image onLoadStart');
            }}
            onError={(e) => {
              this.setState({error: e.nativeEvent.error, loading: 'failed'});
              console.log(`Image onError :${e.nativeEvent.error}`);
            }}
            onProgress={(e) => {
              this.setState({progress: Math.round(100 * e.nativeEvent.loaded / e.nativeEvent.total)});
              console.log(`Image progress :${this.state.progress}`);
            }}
            onLoad={() => this.setState({loading: 'success', error: 'no error'})}>
                <View style={{flex: 1,backgroundColor: 'transparent'}}>
                  <Text>{this.state.progress}%</Text>
                    <Text>图片加载error: {this.state.error} loading: {this.state.loading}</Text>
                </View>
          </Image>
        );
    }
}

// define your styles
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
//make this component available to the app
export default ImageItem;
