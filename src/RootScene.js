import Lightbox from 'react-native-lightbox'
//import liraries
import React, {PureComponent} from 'react'
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
    StatusBar,
    Dimensions,
    InteractionManager,
} from 'react-native'
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation'
import SplashScreen from 'react-native-splash-screen'

import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import NewsPage from './pages/NewsPage'
import UserCenterPage from './pages/UserCenterPage'

import TabBarItem from './widget/TabBarItem'
import GuidePage from "./pages/GuidePage";
// create a component
class RootScene extends PureComponent {
    props: {
        onSubmit: Function,
    }

    state: {
        text: string
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                SplashScreen.hide();
                // navigator.resetTo({
                //     component: HomePage,
                //     name: 'HomePage',
                // });
            });
        }, 2000);
        // // do stuff while splash screen is shown
        // // After having done stuff (such as async tasks) hide the splash screen
        // SplashScreen.hide();
    }
    // constructor() {
    //     super()
    //
    //     StatusBar.setBarStyle('light-content')
    // }
    constructor(props) {
        super(props);
        this.state = {text: 'constructor text'};
        // console.log(`ListRequest - Success node:${this.requestNode}`);
    }

    onSubmit() {
        console.log('onSubmit');
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        console.log("prevState " + prevState);
                        console.log("currentState " + currentState);
                        // const currentScene = getCurrentRouteName(currentState);
                        // const previousScene = getCurrentRouteName(prevState);
                        // if (previousScene !== currentScene) {
                        //     if (lightContentScenes.indexOf(currentScene) >= 0) {
                        //         StatusBar.setBarStyle('light-content')
                        //     } else {
                        //         StatusBar.setBarStyle('dark-content')
                        //     }
                        // }
                    }
                }
            />

        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/homepage.png')}
                        selectedImage={require('./img/tabbar/homepage_selected.png')}
                    />
                )
            }),
        },
        Nearby: {
            screen: NewsPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '新闻',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/merchant.png')}
                        selectedImage={require('./img/tabbar/merchant_selected.png')}
                    />
                )
            }),
        },

        Order: {
            screen: ListPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '列表',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/order.png')}
                        selectedImage={require('./img/tabbar/order_selected.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: UserCenterPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '个人',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/mine.png')}
                        selectedImage={require('./img/tabbar/mine_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797',
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: true,
            style: {backgroundColor: '#ffffff'},
        },
    }
);

Tab.navigationOptions = ({title: 'Welcome', header: null});

const Navigator = StackNavigator(
    {
        Tab: {
            screen: Tab,
            // navigationOptions: {
            //     // headerStyle: { backgroundColor: color.theme }
            //     // headerBackTitle: null,
            //     header: null,
            //     headerTintColor: '#333333',
            //     // showIcon: true,
            // },
        },
        Home: {screen: HomePage},
        ListPage: {screen: ListPage},
        Guide: {screen: GuidePage},
    }
    ,
    {
        headerMode: 'screen',
        initialRouteName: "Guide",
        initialRouteParams:{user:"init roter jojol"},
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            // headerBackTitle: null,
            // header: null,
            // title:'HelloReactNative',
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
);

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
