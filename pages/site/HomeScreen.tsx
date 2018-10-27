import React from 'react';
import { Button, Image, View, Text, StyleSheet, AsyncStorage } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: '首页'
    };
    /*
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    };

    */
    state = {
        count: 0
    };

    _increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen {this.state.count}</Text>
                <Button title="查看更多" onPress={this._showMoreApp} />
                <Button title="注销" onPress={this._signOutAsync} />
                <Button
                    title="Go to Notification"
                    onPress={() => this.props.navigation.navigate('Notification')}
                />
            </View>
        );
    }
}

export default HomeScreen;