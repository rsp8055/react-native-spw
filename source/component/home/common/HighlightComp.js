import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

const HighlightComp = (props) => {

    const {
        highlightContainer,
        highlightHeading,
        wantsText,
    } = styles;

    return (

        <View style={highlightContainer}>

            <FlatList

                initialNumToRender={2}

                data={props.highlightData}

                ListHeaderComponent={
                    <Text style={[wantsText, { fontFamily: 'Exo-Italic', margin: 10 }]}>Highlight's</Text>
                }

                renderItem={({ item, index }) =>
                    <View style={{}}>
                        <Text style={highlightHeading}>{index + 1}. {item}</Text>
                    </View>
                }

                showsVerticalScrollIndicator={false}

                keyExtractor={(item, index) => item}

                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}

            />

        </View>

    );

}

const styles = StyleSheet.create({
    highlightContainer: {
        margin: 20,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    highlightHeading: {
        margin: 10,
        fontSize: 15,
        marginLeft: 20,
        color: '#FFFFFF',
        textAlign: 'justify',
        fontFamily: 'Filson_Soft_W03_Book',
    },
    wantsText: {
        fontSize: 15,
        color: '#F6ACB0',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: 'Filson_Soft_W03_Book',
    },
});

export { HighlightComp };