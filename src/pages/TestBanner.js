import React, {PureComponent} from "react";
import {Button, Dimensions, Image, StatusBar, StyleSheet, View,Platform,BackHandler} from "react-native";

import UserSetting from "../utils/UserSetting";
import Swiper from "react-native-swiper";
import Banner from "../widget/Banner";
const {width, height} = Dimensions.get('window');

// create a component
export default class TestBanner extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: 'GuidePage',
        // header: null,
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



    render() {
        // const {params} = this.props.navigation.state;
        // console.log("this.props.navigation.state.params" + params)
        return (
            <View style={styles.container}>

                <Banner />
                {/*/!*<StatusBar barStyle='light-content'/>*!/*/}
                {/*<Swiper style={styles.wrapper}*/}
                        {/*dot={<View style={{*/}
                            {/*backgroundColor: 'rgba(255,255,255,.3)',*/}
                            {/*width: 10,*/}
                            {/*height: 10,*/}
                            {/*borderRadius: 5,*/}
                            {/*marginLeft: 7,*/}
                            {/*marginRight: 7*/}
                        {/*}}/>}*/}
                        {/*activeDot={<View style={{*/}
                            {/*backgroundColor: '#fff',*/}
                            {/*width: 10,*/}
                            {/*height: 10,*/}
                            {/*borderRadius: 5,*/}
                            {/*marginLeft: 7,*/}
                            {/*marginRight: 7*/}
                        {/*}}/>}*/}
                        {/*paginationStyle={{*/}
                            {/*bottom: 50*/}
                        {/*}}*/}
                        {/*loop={false}>*/}
                    {/*<View style={styles.slide}>*/}
                        {/*<Image style={styles.image} source={require('../img/guide/guide1.jpg')}/>*/}
                    {/*</View>*/}
                    {/*<View style={styles.slide}>*/}
                        {/*<Image style={styles.image} source={require('../img/guide/guide2.jpg')}/>*/}
                    {/*</View>*/}
                    {/*<View style={styles.slide}>*/}
                        {/*<Image style={styles.image} source={require('../img/guide/guide3.jpg')}/>*/}
                        {/*<View style={{*/}
                            {/*position: 'absolute',*/}
                            {/*width:100,*/}
                            {/*height:50,*/}
                            {/*right:20,*/}
                            {/*bottom: 70*/}
                        {/*}}>*/}
                            {/*<Button*/}
                                {/*onPress={this.onTouchPress}*/}
                                {/*title="Next"*/}
                            {/*/>*/}
                        {/*</View>*/}

                    {/*</View>*/}
                {/*</Swiper>*/}
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

