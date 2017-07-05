import React, {PureComponent} from "react";
import {Button, Dimensions, Image, StatusBar, StyleSheet, View} from "react-native";

import Swiper from "react-native-swiper";
const {width, height} = Dimensions.get('window')

// create a component
class GuidePage extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: 'GuidePage',
        header: null,
    })

    props: {
        text: string,
    }

    state: {
        text: string
    }

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
        // console.log(`ListRequest - Success node:${this.requestNode}`);
    }


    onTouchPress = () => {
        console.log(`onTouchPress :${this.state.text}`);
        // this.props.onChangeText && this.props.onChangeText()
    }
    render() {
        const {params} = this.props.navigation.state;
        console.log("this.props.navigation.state.params" + params)
        return (
            <View>
                <StatusBar barStyle='light-content'/>
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
                        <Button
                            onPress={() => this.props.navigation.navigate('Tab', {fatherPage: 'GuidePage'})}
                            title="Next"
                        />
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
        backgroundColor: 'transparent'
    },

    image: {
        width,
        height,
        flex: 1
    }
});

export default GuidePage;