import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});

class HomeScreen extends React.Component {

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

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen {this.state.count}</Text>
                <Button
                    title="Go to Notification"
                    onPress={() => this.props.navigation.navigate('Notification')}
                />
            </View>
        );
    }
}

export default HomeScreen;