import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    ShowError,
    BackHeader,
    PickerComp,
} from '../../common';
import { GoButton } from '../common';

class RequestNewJob extends Component {

    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favSport: '',
            jobPriority: '',
            jobCategory: '',
            jobCategoryList: [
                {
                    label: 'All',
                    value: 'all',
                },
                {
                    label: 'Technical',
                    value: 'technical',
                },
                {
                    label: 'Non-Technical',
                    value: 'nontechnical',
                },
                {
                    label: 'Social',
                    value: 'social',
                },
                {
                    label: 'Other',
                    value: 'other',
                },
            ],

        };
    }

    render() {

        const {
            mainContainer,
            postInstructionStyle,
        } = styles;

        return (

            <View style={mainContainer}>

                <BackHeader
                    headerTitle={'Request New Job'} />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginVertical: 30, }}>

                        <Text style={postInstructionStyle}>
                            Please select the job category first
                        </Text>

                        <View style={{ flexDirection: 'row', }}>

                            <View style={{ width: '80%', }}>

                                <PickerComp
                                    pickerItems={this.state.jobCategoryList}
                                    pickerValue={this.state.jobCategory}
                                    placeholderLabel={'* Select Job Category'}
                                    onValueChange={(value) => { this.setState({ jobCategory: value, }); }} />

                                <ShowError />

                            </View>

                            <GoButton />

                        </View>

                    </View>

                </ScrollView>

            </View >

        );

    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    postInstructionStyle: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 20,
        textAlign: 'center',
        fontFamily: 'Exo-Italic',
    },
});

export { RequestNewJob };