import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {TextInput, RadioButton,Button} from "react-native-paper";

export default class Tadacal1Screen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {title: "Tadacal 1"}
    };

    constructor(props) {
        super(props);
        this.state = {
            val1: "0",
            val2: "0",
            result: "0",
            degres: [30, 40]
        }
    }

    _handleNilai1 = (value) => {
        let isNumber = value.match(/^-{0,1}\d+$/);
        if (isNumber) this.setState({val1: value})
        else {
            value !== '' ? alert('Harus berupa angka') : this.setState({val1: ''});
        }
    };
    _handleNilai2 = (value) => {
        this.setState({val2: value})
    };
    _calculationResult = () =>{
        let {val1,val2} = this.state;
        let isValid1 = val1.match(/^-{0,1}\d+$/);
        if(isValid1){
            this.setState({result:val1*val2})
            return;
        }
        alert('Tidak dapat dihitung, periksa nomor yang anda masukkan');
    }
    render() {
        let {degres, val1, val2, result} = this.state;
        return (

            <ScrollView>
                <View style={{flex: 1, flowGrow: 1, padding: 20}}>
                    <TextInput keyboardType={"numeric"} number={true} mode={"outlined"} label={"Masukkan Nilai"} value={val1}
                               onChangeText={this._handleNilai1}/>
                    <RadioButton.Group
                        onValueChange={this._handleNilai2}
                        value={val2}
                    >
                        {
                            degres.map((deg, index) => (
                                <View key={index}
                                      style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20}}>
                                    <RadioButton
                                        value={deg}
                                    />
                                    <Text style={{paddingTop: 10}}>{deg + " Derajat"}</Text>
                                </View>
                            ))
                        }
                    </RadioButton.Group>
                    <Button onPress={this._calculationResult} style={{marginTop:20}} mode={"contained"}>Hitung Hasil</Button>
                    <View style={{marginTop:30,flex:1,flewGrow:1}}>
                        <Text style={{textAlign:'center',fontSize:100,flex:1,flexGrow:1}}>{result}</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

}