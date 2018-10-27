import React from 'react';
import { Button, View, Text, StatusBar, AsyncStorage } from 'react-native';

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here'
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="注销" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default OtherScreen;