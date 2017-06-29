import Lightbox from 'react-native-lightbox'
import React, { PureComponent } from 'react'
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  Image,
  View,
  Dimensions,
} from 'react-native'

import ImageItem from '../widget/ImageItem'

// create a component
class HomePage extends PureComponent {

      static navigationOptions = ({ navigation }) => ({
        title:'HelloHome',
      })

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
          <ScrollView>
            <Text style={styles.instructions}>
               当前屏幕宽度: {Dimensions.get('window').width} input: {this.state.text}
            </Text>

              <Text style={styles.instructions}>
                 HomePage
              </Text>
              <Lightbox navigator={this.props.navigator}>
                <Image
                  style={{
                    height:  300 ,
                    width:  400 ,
                  }}
                  source={{uri:'https://seagm.github.io/react-test/images/awesome4.jpg'}}
                />
              </Lightbox>


              <Image
                style={{
                  width:  250 ,
                  height:  410 ,
                }}
                resizeMode={"contain"}
                source={{uri:'https://seagm.github.io/react-test/images/awesome1.jpg'}}
              />


              <ImageItem />
            <View style={{height:600}}>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onSubmitEditing={this.onSubmitEditing.bind(this)}
                onChangeText={(text) => {
                                text = text.replace(/ /g, '_');
                                console.log(`onChangeText replace :${this.state.text} vs ${text}`);
                                this.setState({text});
                              }}
                returnKeyType='next'
                value={this.state.text}
              />

              <View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, flexDirection:'row', padding:10, backgroundColor: 'steelblue'}} >
                <View style={{flex: 1, backgroundColor: 'red'}}></View>
                <View style={{flex: 1, backgroundColor: 'orange'}}></View>
                <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
              </View>
            </View>


            <View style={{height:400}}>
              <Text style={styles.instructions}>
                 当前屏幕宽度: {Dimensions.get('window').width} input: {this.state.text}
              </Text>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onSubmitEditing={this.onSubmitEditing.bind(this)}
                onChangeText={(text) => {
                                text = text.replace(/ /g, '_');
                                console.log(`onChangeText replace :${this.state.text} vs ${text}`);
                                this.setState({text});
                              }}
                returnKeyType='next'
                value={this.state.text}
              />


              <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor:'orange',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View>
            </View>
          </ScrollView>

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

export default HomePage;
