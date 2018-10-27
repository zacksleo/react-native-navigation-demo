import React from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: navigation.getParam('otherParam', '详情'),
            headerStyle: {
                bgckgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'no-id');
        const otherParam = navigation.getParam('otherParam', 'default-value');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId:{JSON.stringify(itemId)}</Text>
                <Text>OtherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button title="Go to Details ... again"
                    onPress={() => this.props.navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100)
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default DetailsScreen;