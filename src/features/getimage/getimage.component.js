import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { FetchImage, FetchImageError } from './getimage.actions'

class GetImageComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to redux-saga</Text>
                <Button
                    title='Get Image Dog'
                    onPress={() => {
                        this.props.onFetchImage();
                    }}
                />
                <Button
                    title='Get Image Error'
                    onPress={() => {
                        this.props.onFetchImageError();
                    }}
                />
                {
                    this.props.url === null ? 
                    <View /> :
                    <Image style={{ width: 250, height: 250, resizeMode: 'contain' }} source={{ uri: this.props.url}}/>
                }
                {
                    this.props.error === null ?
                    <View/>
                    : 
                    <Text style={{ color: 'red' }}> {this.props.error} </Text>
                }

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    fetch: state.ImageReducer.fetch,
    url: state.ImageReducer.url,
    error: state.ImageReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
    onFetchImage: () => { dispatch(FetchImage()) },
    onFetchImageError: () => dispatch(FetchImageError())
});

export default connect(mapStateToProps, mapDispatchToProps)(GetImageComponent);
