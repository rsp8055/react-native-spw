import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {
    Pyramid,
    BigButton,
    ShowError,
    BackHeader,
    PickerComp,
    PostInputComp,
} from '../../common';

class PostNewJob extends Component {

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

            jobPriorityList: [
                {
                    label: 'Normal',
                    value: 'normal',
                },
                {
                    label: 'Immediate',
                    value: 'immediate',
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
            postInputStyle,
            postInstructionStyle,
        } = styles;

        return (

            <View style={mainContainer}>

                <BackHeader
                    headerTitle={'Post New Job'} />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginVertical: 30, }}>

                        <Text style={postInstructionStyle}>
                            Please fill all the following details
                    </Text>

                        <View>

                            <PostInputComp
                                placeholderLabel={'* Enter Job Title'} />

                            <ShowError />

                            <PickerComp
                                pickerItems={this.state.jobCategoryList}
                                pickerValue={this.state.jobCategory}
                                placeholderLabel={'* Select Job Category'}
                                onValueChange={(value) => { this.setState({ jobCategory: value, }); }} />

                            <ShowError />

                            <PostInputComp
                                placeholderLabel={' Enter Payment'} />

                            <View style={{ margin: 10 }} />

                            <PostInputComp
                                multiline={true}
                                customInputStyle={postInputStyle}
                                placeholderLabel={'* Enter Job Description'} />

                            <ShowError />

                            <PickerComp
                                pickerItems={this.state.jobPriorityList}
                                pickerValue={this.state.jobPriority}
                                placeholderLabel={'* Select Job Priority'}
                                onValueChange={(value) => { this.setState({ jobPriority: value, }); }} />

                            <ShowError />

                            <BigButton
                                bigButtonLabel={'Submit Job'} />

                        </View>

                        <Pyramid />

                    </View>

                </ScrollView>

            </View>

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
    postInputStyle: {
        height: 100,
        fontSize: 16,
        color: '#000000',
        marginHorizontal: 30,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
});

export { PostNewJob };