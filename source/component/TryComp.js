import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class TryComp extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Red',
                    value: 'red',
                },
                {
                    label: 'Orange',
                    value: 'orange',
                },
                {
                    label: 'Blue',
                    value: 'blue',
                },
            ],
            favSport: undefined,
            items2: [
                {
                    label: 'Football',
                    value: 'football',
                },
                {
                    label: 'Baseball',
                    value: 'baseball',
                },
                {
                    label: 'Hockey',
                    value: 'hockey',
                },
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'red',
            });
        }, 1000);

        // parent can also update the `items` prop
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
            });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>What&rsquo;s your favorite sport?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a sport...',
                        value: null,
                    }}
                    items={this.state.items2}
                    onValueChange={(value) => {
                        this.setState({
                            favSport: value,
                        });
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSport}
                />

                <View style={styles.container}>
                    <RNPickerSelect
                        items={this.state.items}
                        placeholder={{}}
                        value={this.state.favColor}
                        onValueChange={(value) => {
                            this.setState({
                                favColor: value,
                            });
                        }}
                    >
                        <Text style={{ color: 'red' }}>
                            Select your favorite color
                        </Text>
                    </RNPickerSelect>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});