import Lightbox from "react-native-lightbox";
import React, {PureComponent} from "react";
import {
    Button,
    Dimensions,
    Image,
    InteractionManager,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from "react-native";

import ImageItem from "../widget/ImageItem";
import UserSetting from "../utils/UserSetting";
import Banner from "../widget/Banner";

// create a component
class HomePage extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        title: 'HelloHome',
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

    settings = {
        user:'jojol',
        name:'popo',
    };

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
        console.log('== Homepage constructor');
        console.log(this.props.navigation);

        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                console.log('HomePage InteractionManager.runAfterInteractions');
                // navigator.resetTo({
                //     component: HomePage,
                //     name: 'HomePage',
                // });
                if (UserSetting.settings && UserSetting.settings.guideOpen){
                    this.props.navigation.navigate('Guide', {fatherPage: 'HomePage'})
                }
            });
        }, 1000);
    }


    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }


    onChangeText = (text) => {
        text = text.replace(/ /g, '_');
        console.log(`onChangeText :${this.state.text} vs ${text}`);
        this.setState({text});
    }


    onTouchPress = () => {
        this.settings.gogod = 'gogo';
        console.log(`onTouchPress :${this.state.text}`);
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
        console.log('== Homepage render');
        console.log(this.props.navigation);
        const {params} = this.props.navigation.state;
        console.log("this.props.navigation.state.params" + params)
        let mySettings = UserSetting.loadSettings();
        mySettings.then(
            ret => {
                console.log('HomePage load setting:' + ret);
            }
        );
        return (
            <ScrollView>
                {/*<Banner bannerHeight={200} />*/}
                <Banner />
                <Text style={styles.instructions}>
                    当前屏幕宽度: {Dimensions.get('window').width} input: {mySettings.name} input: {HomePage.name}
                </Text>


                {/*<Text style={styles.instructions}>*/}
                {/*initialRouteParams: {this.props.state} input: {params.user}*/}
                {/*</Text>*/}


                {/*<TouchableNativeFeedback*/}
                    {/*onPress={this.onTouchPress}*/}
                    {/*background={TouchableNativeFeedback.SelectableBackground()}>*/}
                    {/*<View style={{width: 300, height: 50, backgroundColor: 'red'}}>*/}
                        {/*<Text style={{margin: 15}}>TouchableNativeFeedback Button</Text>*/}
                    {/*</View>*/}
                {/*</TouchableNativeFeedback>*/}

                <TouchableHighlight
                    // onPress={() => {
                    //     ToastAndroid.show('TouchableHighlight !', ToastAndroid.SHORT);
                    //
                    // }}
                    onPress={this.onTouchPress}
                    activeOpacity={0.5}
                    underlayColor={'lightgrey'}
                    style={{
                        height:60,
                        flex:1,
                        backgroundColor:'dodgerblue',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Text>TouchableHighlight Button</Text>
                </TouchableHighlight>

                <Text style={styles.instructions}>
                    HomePage
                </Text>

                <View style={{
                    backgroundColor:'blue',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    // alignItems:'center',
                    justifyContent:'space-around'
                }}>
                    <Text style={{
                        height:50,
                        margin:2,
                        backgroundColor:'lightblue',
                        textAlignVertical:'center'
                    }}>
                        Wrap HomePage
                    </Text>
                    <Text style={{
                        height:50,
                        margin:2,
                        backgroundColor:'lightblue',
                        justifyContent:'center'
                    }}>
                        WrapHomePage1
                    </Text>
                    <Text style={{
                        height:50,
                        margin:2,
                        backgroundColor:'lightblue',
                        justifyContent:'center'
                    }}>
                        WrapHomePage3
                    </Text>
                    <Text style={{
                        height:50,
                        margin:2,
                        backgroundColor:'lightblue',
                        alignSelf:'center'
                    }}>
                        WrapHomePageWarp
                    </Text>
                    <Text style={{
                        height:50,
                        margin:2,
                        backgroundColor:'lightblue',
                        justifyContent:'center'
                    }}>
                        WrapHomePageWarp
                    </Text>
                </View>

                <Button
                    onPress={() => this.props.navigation.navigate('HomePage', {fatherPage: 'HomePage'})}
                    title="JumpToHomePage"
                />

                <Lightbox navigator={this.props.navigator}>
                    <Image
                        style={{
                            height: 300,
                            width: 400,
                        }}
                        source={{uri: 'https://seagm.github.io/react-test/images/awesome4.jpg'}}
                    />
                </Lightbox>


                <Image
                    style={{
                        width: 250,
                        height: 410,
                    }}
                    resizeMode={"contain"}
                    source={{uri: 'https://seagm.github.io/react-test/images/awesome1.jpg'}}
                />


                <ImageItem />
                <View style={{height: 600}}>
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
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onSubmitEditing={this.onSubmitEditing.bind(this)}
                        onChangeText={this.onChangeText}
                        returnKeyType='next'
                        value={this.state.text}
                    />

                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, flexDirection: 'row', padding: 10, backgroundColor: 'steelblue'}}>
                        <View style={{flex: 1, backgroundColor: 'red'}}></View>
                        <View style={{flex: 1, backgroundColor: 'orange'}}></View>
                        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
                    </View>
                </View>


                <View style={{height: 400}}>
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
                        backgroundColor: 'orange',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
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
