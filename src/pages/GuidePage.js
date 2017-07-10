import React, {PureComponent} from "react";
import {Button, Dimensions, Image, StatusBar, StyleSheet, View,Platform,BackHandler} from "react-native";

import UserSetting from "./UserSetting";
import Swiper from "react-native-swiper";
const {width, height} = Dimensions.get('window');

// create a component
class GuidePage extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: 'GuidePage',
        header: null,
    })

    props: {
        text: string,
        onNext: Function,
    }

    state: {
        text: string
    }

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
        // console.log(`ListRequest - Success node:${this.requestNode}`);
    }

    componentWillMount(){
        if (Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount(){
        if (Platform.OS === 'android'){
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
        // Typically you would use the navigator here to go to the last state.
        // if (!this.onMainScreen()) {
        //     this.goBack();
        //     return true;
        // }
        return true;
    };

    onTouchPress = () => {
        console.log(`onTouchPress :${this.state.text}`);
        UserSetting.settings.guideOpen = false;
        UserSetting.saveSettings();
        console.log('GuidePage onTouch press');
        console.log(this.props.navigation);
        // this.props.onNext();
        // this.props.navigation.navigate('Tab', {fatherPage: 'GuidePage'});
        this.props.navigation.goBack();
    };

    render() {
        // const {params} = this.props.navigation.state;
        // console.log("this.props.navigation.state.params" + params)
        return (
            <View>
                {/*<StatusBar barStyle='light-content'/>*/}
                <Swiper style={styles.wrapper}
                        dot={<View style={{
                            backgroundColor: 'rgba(255,255,255,.3)',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 7,
                            marginRight: 7
                        }}/>}
                        activeDot={<View style={{
                            backgroundColor: '#fff',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 7,
                            marginRight: 7
                        }}/>}
                        paginationStyle={{
                            bottom: 50
                        }}
                        loop={false}>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/guide/guide1.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/guide/guide2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/guide/guide3.jpg')}/>
                        <View style={{
                            position: 'absolute',
                            width:100,
                            height:50,
                            right:20,
                            bottom: 70
                        }}>
                            <Button
                                onPress={this.onTouchPress}
                                title="Next"
                            />
                        </View>

                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: '#f00'
    },

    slide: {
        flex: 1,
        backgroundColor: 'darkslategrey'
    },

    image: {
        width,
        height,
        flex: 1
    }
});

export default GuidePage;
