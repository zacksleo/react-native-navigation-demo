import React from 'react';
import { Button, View, Text, StyleSheet, AsyncStorage } from 'react-native';

class SignInScreen extends React.Component {

    static navigationOptions = {
        title: '登录'
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="登录" onPress={this._signInAsync} />
            </View>
        );
    }
}

export default SignInScreen;