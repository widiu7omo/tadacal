import React from 'react'
import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from "react-native";
import RubberData from "../constants/Rubber";
import {Card} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    card: {
        marginBottom: 20
    }
});

export default class RubberScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {title: "Rubber"}
    };

    constructor(props) {
        super(props)
    }
    _onPress(data){
        this.props.navigation.navigate('Detail',{data});
    }
    render() {
        return (<ScrollView contentContainerStyle={styles.container}>
            {
                RubberData.map((rubber, index) => (
                    <View key={index} style={styles.card}>
                            <Card onPress={this._onPress.bind(this,rubber)}>
                                <Card.Title title={rubber.name}/>
                            </Card>
                    </View>
                ))

            }
        </ScrollView>)
    }
}