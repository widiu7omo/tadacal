import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {Card, Avatar, List, Paragraph, Title, Button} from "react-native-paper";
import {MonoText} from '../components/StyledText';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {title: 'Home'}
    }

    constructor(props) {
        super(props);
        this.state = {
            calc: false, ref: false
        }
    }

    _handleCalc = () => {
        this.setState({calc: !this.state.calc});
    }

    _handleRef = () => {
        this.setState({ref: !this.state.ref})
    }

    goTo(screen) {
        this.props.navigation.navigate(screen)
    }

    render() {
        let state = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <Title>Selamat datang di aplikasi TADACAL</Title>
                    <Paragraph>Dibawah ini merupakan beberapa menu yang tersedia</Paragraph>
                    <View>
                        <List.Section title="Daftar Menu Aplikasi">
                            <List.Accordion
                                title="KALKULATOR"
                                left={props => <List.Icon {...props} icon="folder"/>}
                                expanded={state.calc}
                                onPress={this._handleCalc}
                            >
                                <List.Item title="TADACAL 1"
                                           left={() => <List.Icon icon={'looks-one'}/>}
                                           onPress={this.goTo.bind(this, 'Tada1')}/>
                                <List.Item title="TADACAL 2"
                                           left={() => <List.Icon icon={'looks-two'}/>}
                                           onPress={this.goTo.bind(this, 'Tada2')}/>
                            </List.Accordion>
                            <List.Accordion
                                title={"REFERENSI"}
                                left={props => <List.Icon {...props} icon={"feedback"}/>}
                                expanded={state.ref}
                                onPress={this._handleRef}
                            >
                                <List.Item title="On-outrigger Operation"
                                           left={() => <List.Icon icon={'looks-one'}/>}
                                           onPress={this.goTo.bind(this, 'Outrigger')}/>
                                <List.Item title="On-rubber Operatior"
                                           left={() => <List.Icon icon={'looks-two'}/>}
                                           onPress={this.goTo.bind(this,'Rubber')}/>
                            </List.Accordion>
                        </List.Section>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        // marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
