import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
});

class NotificationScreen extends React.Component {

    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./notice.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        )
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="toggleDrawer"
            />
        );
    }
}

export default NotificationScreen;