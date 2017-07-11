import React, {PureComponent} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import Swiper from "react-native-swiper";
const {width} = Dimensions.get('window');
let bannerHeight = (width * 300) / 720;

// create a component
export default class Banner extends PureComponent {
    props: {
        text: string,
        bannerHeight: number,
    };

    state: {
        bannerShow: boolean,
    };

    static defaultProps = {
        bannerHeight: 0,
        text: "hello",
    };

    constructor(props) {
        super(props);
        this.state = {bannerShow: false,};
        if (this.props.bannerHeight > 0){
            bannerHeight = this.props.bannerHeight;
        }
        console.log(`banner - props:${this.props.bannerHeight} computer: ${bannerHeight}`);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                bannerShow: true
            });
        }, 10)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    onTouchPress = () => {
    };

    render() {
        if (this.state.bannerShow) {
            console.log(`banner - bannerHeight:${this.props.bannerHeight} height: ${bannerHeight}`);
            return (
                <Swiper style={styles.wrapper}
                        height={bannerHeight}
                        dot={<View style={styles.dot}/>}
                        activeDot={<View style={[styles.dot,styles.dotOn]}/>}
                        paginationStyle={{
                            bottom: 10
                        }}
                        loop={true}>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/banner/banner1.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/banner/banner2.jpg')}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.image} source={require('../img/banner/banner3.jpg')}/>
                    </View>
                </Swiper>
            )
        } else {
            return (
                <View style={{height: bannerHeight}}>
                    <Image source={ require('../img/banner/banner1.jpg')} style={styles.image}/>
                </View>
            );
        }

    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent'
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 7,
        marginRight: 7
    },
    dotOn: {
        backgroundColor: '#fff',
    },

    slide: {
        flex: 1,
        backgroundColor: 'darkslategrey'
    },

    image: {
        width,
        flex: 1,
    }
});

