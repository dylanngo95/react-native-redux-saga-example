import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';

class FetchImageComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to redux-saga</Text>
                <Button
                    title='Get Dog'
                    onPress={() => {
                        this.props.onRequestDog();
                    }}
                />
                <Button
                    title='Fail'
                    onPress={() => {
                        this.props.onTest();
                    }}
                />
                {
                    this.props.dog === null ? 
                    <View /> :
                    <Image style={{ width: 120, height: 120, }} source={{ uri: this.props.dog}}/>
                }
                <Text style={{ color: 'red' }}> {this.props.error} </Text>

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    fetching: state.fetching,
    dog: state.dog,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
    onRequestDog: () => { dispatch({ type: "API_CALL_REQUEST" }) },
    onError: () => { dispatch({ type: "API_CALL_FAILURE" }) },
    onTest: () => { dispatch({ type: "API_CALL_TEST" }) },
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchImageComponent);
