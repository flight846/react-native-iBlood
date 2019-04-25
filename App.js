import React, {Component} from 'react';
import { Platform, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Block, Text } from './components';
import * as theme from "./theme";
import * as mocks from "./mocks";

export default class App extends Component {
    renderHeader() {
        return (
            <Block flex={0.42} column style={{ paddingHorizontal: 15 }}>
                <Block flex={false} row style={{ paddingVertical: 15 }}>
                    <Block center>
                        <Text h3 white style={{ marginRight: -(25 + 5) }}>
                            Blood Requests
                        </Text>
                    </Block>
                    {/* <Image style={styles.avatar} source={user.avatar} /> */}
                </Block>
                <Block card shadow color="white" style={styles.headerChart}>
                    <Block row space="between" style={{ paddingHorizontal: 30 }}>
                        <Block flex={false} row center>
                            <Text h1>291</Text>
                            <Text caption bold tertiary style={{ paddingHorizontal: 10 }}>
                                -12%
                            </Text>
                        </Block>
                        <Block flex={false} row center>
                            <Text caption bold primary style={{ paddingHorizontal: 10 }}>
                                +49%
                            </Text>
                            <Text h1>481</Text>
                        </Block>
                    </Block>
                    <Block
                        flex={0.5}
                        row
                        space="between"
                        style={{ paddingHorizontal: 30 }}>
                        <Text caption light>
                            Available
                        </Text>
                        <Text caption light>
                            Requests
                        </Text>
                    </Block>
                    <Block flex={1}>
                        <Text>Chart</Text>
                    </Block>
                </Block>
            </Block>
        )
    }

    renderRequests() {
        return (
            <Block flex={0.8} column color='gray2' style={ styles.requests }>
                <Text>Requests</Text>
            </Block>
        )
    }

    render() {
        return (
            <SafeAreaView style={ styles.safe }>
                { this.renderHeader() }
                { this.renderRequests() }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    headerChart: {
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 1
    },
    requests: {
        marginTop: -55,
        paddingTop: 55 + 20,
        paddingHorizontal: 15,
        zIndex: -1
    },
});

// 1:00:50