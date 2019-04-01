// Reusable component for spinner
import React, { Component } from 'react';
import { ImageUrl, Styles } from '.';
import Spinner from 'react-native-spinkit';
import {
    DoubleBounce,
    Bubbles,
    Pulse,
    Bars,
} from 'react-native-loader';
import {
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

class SpinnerComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            types: [
                'Circle',

                'FadingCircleAlt',
                'Bounce',
                'Wave',
                'ThreeBounce',


                'CircleFlip',
                'WanderingCubes',
                'Pulse',
                'ChasingDots',
                '9CubeGrid',
                'WordPress',
                'FadingCircle',
                'Arc',
                'ArcAlt'
            ],
            size: 100,
            color: "#FFFFFF",
            isVisible: true
        }
    }

    render() {

        return (

            <View style={styles.container}>

                <Spinner
                    style={styles.spinner}
                    isVisible={true}
                    size={this.state.size}
                    type={'Circle'}
                    color={this.state.color} />

                {/* <Bubbles size={10} color="#FFF" />
            <Bars size={10} color="#FDAAFF" />
            <Pulse size={10} color="#52AB42" />
            <DoubleBounce size={10} color="#1CAFF6" /> */}

                {/* <Image source={ImageUrl.load2Uri} style={{ height: 150, width: 150 }} /> */}

                {/* <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#FFFFFF',  }} >

                    <ActivityIndicator size="large" color="#FFFFFF" style={{ margin: 10 }} />

                </View> */}

                {/* <ActivityIndicator size="small" color="#E91E63" style={{ margin: 10 }} />

                <ActivityIndicator size="large" color="#00BCD4" style={{ margin: 10 }} />

                <ActivityIndicator size="small" color="#009688" style={{ margin: 10 }} />

                <ActivityIndicator size="large" color="#4CAF50" style={{ margin: 10 }} />

                <ActivityIndicator size="small" color="#FF9800" style={{ margin: 10 }} /> */}

            </View>

        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        // backgroundColor: 'transparent',
    },

    spinner: {
        marginBottom: 50
    },

    btn: {
        marginTop: 20
    },

    text: {
        color: "white"
    }
});


export { SpinnerComp };
