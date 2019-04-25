import React, {Component} from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Block, Text } from './components';
import * as theme from "./theme";
import * as mocks from "./mocks";

export default class App extends Component {
    render() {
        return (
            <Block center middle style={ styles.container }>
                <Text h1 bold>iBlood</Text>
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
});
