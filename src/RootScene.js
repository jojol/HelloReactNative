//import liraries
import React, { PureComponent } from 'react'
// import { StatusBar } from 'react-native'
// import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native'


// create a component
class RootScene extends PureComponent {
    // constructor() {
    //     super()
    //
    //     StatusBar.setBarStyle('light-content')
    // }

    render() {
        return (
            <View style={{height:400}}>
              <Text style={styles.instructions}>
                 当前屏幕宽度: {Dimensions.get('window').width}
              </Text>
              {/* <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor:'orange',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
              </View> */}



              <View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, flexDirection:'row', padding:10, backgroundColor: 'steelblue'}} >
                <View style={{flex: 1, backgroundColor: 'red'}}></View>
                <View style={{flex: 1, backgroundColor: 'orange'}}></View>
                <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
              </View>
            </View>
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
