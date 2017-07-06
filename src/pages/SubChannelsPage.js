import React, {PureComponent} from "react";
import {StyleSheet} from "react-native";
import {TabBarBottom, TabBarTop, TabNavigator} from "react-navigation";
import UserCenterPage from "./UserCenterPage";

// create a component
class SubChannelsPage extends PureComponent {
    props: {
        onSubmit: Function,
    }

    state: {
        text: string
    }

    onTouchPress = () => {
        console.log(`onTouchPress :${this.state.text}`);
    }

    constructor(props) {
        super(props);
        this.state = {text: 'constructor text'};
        // console.log(`ListRequest - Success node:${this.requestNode}`);
    }

    render() {
        return (
            <Tab/>
        );
    }
}

const Tab = TabNavigator(
    {
        First: { screen: UserCenterPage,},
        SecondSecondSecond: { screen: UserCenterPage,},
        Third: { screen: UserCenterPage,},

    },
    {
        tabBarComponent: TabBarTop,
        // tabBarComponent: TabBarBottom,
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {


            activeTintColor: 'white',
            inactiveTintColor: 'lightgrey',
            activeBackgroundColor: 'blue',
            inactiveBackgroundColor: 'green',
            // showLabel: true,
            // style: {backgroundColor: '#ffffff'},
            labelStyle: {
                fontSize: 12,
                // color:'red',
            },
            // tabStyle: {
            //     width: 'wrap-content',
            // },
            style: {
                backgroundColor: 'green',
            },
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

export default SubChannelsPage;
