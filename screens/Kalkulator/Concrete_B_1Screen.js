import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, TextInput} from "react-native-paper";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    textInput:{
        marginBottom:20
    },
    button:{
        marginTop:20
    },
    text:{
        paddingTop:20,
        fontSize: 20
    },
    result:{
        textAlign:'center',
        fontSize:40
    }
});


export default class ConcreteB1 extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {title: 'Kalkulator Concrete B I'}
    };

    constructor(props) {
        super(props);
        super(props);
        this.state = {
            n1:"",
            n2:"",
            result:""
        }
    }

    _handleN1 = (value)=>{
        let isNumber = value.match(/^-{0,1}\d+$/);
        isNumber?this.setState({n1:value}):this.setState({n1:""})
    };
    _handleN2 = (value)=>{
        let isNumber = value.match(/^-{0,1}\d+$/);
        isNumber?this.setState({n2:value}):this.setState({n2:""})
    };
    _countValue = ()=>{
        let {n1,n2} = this.state;
        let result = n1/n2;
        this.setState({result})
    }

    render() {
        let {n1,n2,result} = this.state;
        return (<ScrollView>
            <View style={styles.container}>
                <Card>
                    <Card.Title title={"Kalkulator Concrete B I"}/>
                    <Card.Content>
                        <TextInput style={styles.textInput} keyboardType={"numeric"} mode={"outlined"} value={n1} label={"Nilai 1"} onChangeText={this._handleN1}/>
                        <TextInput style={styles.textInput} keyboardType={"numeric"} mode={"outlined"} value={n2} label={"Nilai 2"} onChangeText={this._handleN2}/>
                        <Button style={styles.button} onPress={this._countValue} mode={"contained"}>Hitung Hasil</Button>
                        <Text style={styles.text}>Hasil : </Text>
                        <Text style={styles.result}>{this.state.result}</Text>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>)
    }
}