import React from 'react';
import {ScrollView,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import outriggerData from '../constants/Outrigger';
import {Card} from "react-native-paper";

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    card:{
        marginBottom:20
    }
});

export default class OutriggerScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {title: 'On-outrigger Operation'}
    };

    constructor(props) {
        super(props)
    }

    _onPress(data){
        this.props.navigation.navigate('Detail',{data});
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {
                    outriggerData.map((outrigger,index) => (
                        <View key={index} style={styles.card}>
                            <Card onPress={this._onPress.bind(this,outrigger)}>
                                    <Card.Title title={outrigger.name}/>
                            </Card>
                        </View>
                    ))

                }
            </ScrollView>
        );
    }
}