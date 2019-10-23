import React from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Paragraph} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    card: {
        flex: 1,
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 15,
    },
    cardText: {
        fontSize: 20,
        textAlign: "center",
    }
});

export default class ReferenceScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {title: 'Referensi'}
    };

    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {name: "On-outriger Operation", screen: "Outrigger"},
                {name: "On-rubber Operation", screen: "Rubber"}
            ]
        }
    }

    _onPress(screen) {
        this.props.navigation.navigate(screen);
    }

    render() {
        let {menus} = this.state;
        return (<ScrollView>
            <View style={styles.container}>
                {
                    menus.map((menu, index) => (
                        <Card style={styles.card} key={index} onPress={this._onPress.bind(this, menu.screen)}>
                            <Card.Content>
                                <Text style={styles.cardText}>{menu.name}</Text>
                            </Card.Content>
                        </Card>
                    ))
                }

            </View>
        </ScrollView>);
    }

    /**
     * Go ahead and delete ExpoConfigView and replace it with your content;
     * we just wanted to give you a quick view of your config.
     */
}
