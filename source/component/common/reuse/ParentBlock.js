import React, { Component } from 'react';
import { ImageBackground, } from 'react-native';
import { ImageUrl } from './ImageUrl';

const ParentComp = (props) => {

    return (

        <ImageBackground
            source={props.backSource || ImageUrl.backUri} style={{
                flex: 1,
                opacity: .8,
                width: null,
                height: null,
            }}>

            {props.children}

        </ImageBackground>

    );

}

export { ParentComp };