import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PickerComp = (props) => {

    const {
        pickerContainer,
        pickerTextStyle,
    } = styles;

    return (

        <View style={pickerContainer}>

            <RNPickerSelect
                placeholder={{
                    label: props.placeholderLabel,
                    value: null,
                }}
                items={props.pickerItems}
                onValueChange={props.onValueChange}
                style={pickerTextStyle}
                value={props.pickerValue}
            />

        </View>



    );

}

const styles = {
    pickerContainer: {
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#F6ACB0',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    pickerTextStyle: {
        fontSize: 16,
        color: 'white',
        paddingTop: 13,
        paddingBottom: 12,
        borderColor: '#F6ACB0',
        placeholderColor: '#FFFFFF',
    },
};

export { PickerComp };