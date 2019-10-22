import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native'
import {Text, Paragraph, Card, Avatar, Title, Button} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
    },
    card: {
        marginBottom: 20
    }
});

export default class KalkulatorScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Menu Kalkulator'
        }
    };
    _handleNavigate = (screen) => {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Card style={styles.card}>
                        <Card.Title title="TADACAL" subtitle="Aplikasi perhitungan alat berat"
                                    left={(props) => <Avatar.Icon {...props} icon="looks-one"/>}/>
                        <Card.Content>
                            <Title>Tadacal 1</Title>
                            <Paragraph>Kalkulator versi pertama yang hanya akan menghitung keperluan dasar
                                saja</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={this._handleNavigate.bind(this,'Tada1')}>Buka</Button>
                        </Card.Actions>
                    </Card>
                    <Card style={styles.card}>
                        <Card.Title title="TADACAL" subtitle="Aplikasi perhitungan alat berat"
                                    left={(props) => <Avatar.Icon {...props} icon="looks-two"/>}/>
                        <Card.Content>
                            <Title>Tadacal 2</Title>
                            <Paragraph>Kalkulator versi kedua, kalkulator kompleks yang dapat menghitung meliputi bla
                                bla bla dan bla bla bla</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={this._handleNavigate.bind(this,'Tada2')}>Buka</Button>
                        </Card.Actions>
                    </Card>
                </ScrollView>
            </View>
        )
    }

}

