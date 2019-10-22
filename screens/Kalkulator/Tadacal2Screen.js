import React from 'react';
import {Text, View, ScrollView, Picker} from 'react-native';
import {TextInput, RadioButton, Button, Paragraph, Card, Avatar} from "react-native-paper";

export default class Tadacal1Screen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {title: "Tadacal 2"}
    };

    constructor(props) {
        super(props);
        this.state = {
            menuKalkulator: [{
                name: "TadaCal Apk",
                submenu: []
            }, {
                name: "Khusus Admissible Ground Pressures",
                submenu: [
                    {name: "Asphalt"},
                    {name: "Concrate B I"},
                    {name: "Concrate B II"}
                ]
            }],
            tadacalapk: {
                n1: '0',
                n2: '0',
                r1: '0'
            },
            tadacalapkData: [
                {name: "dmissible Ground", value: "0.0"},
                {name: "Mud, turf, Moorland", value: "0.0"},
                {name: "Fine to Medium-fine-sand", value: "1.5"},
                {name: "Coarse sand to Gravel", value: "2.0"},
                {name: "Very Soft", value: "0"},
                {name: "Soft", value: "0.4"},
                {name: "Firm", value: "1.0"},
                {name: "Semi-Firm", value: "2.0"},
                {name: "Hard", value: "4.0"},
                {name: "In.Compacted Strata", value: "15"},
                {name: "In.Block Or Pillar Form", value: "30"}
            ]
        }
    }

    PickerOption = () => (
        <Picker
            // enabled={}
            // selectedValue={}
            onValueChange={value => {
                this.setState({})
            }
            }>
            {
                this.state.tadacalapkData.map((note, key) => (
                    <Picker.Item key={key} label={note.name}
                                 value={note.value}/>
                ))
            }
        </Picker>
    );
    _handleTadaCallApk = (value) => {
        let isNumber = value.match(/^-{0,1}\d+$/);
        if (isNumber) this.setState({})
        else {
            value !== '' ? alert('Harus berupa angka') : this.setState({val1: ''});
        }
    };
    _handleTadaCallOption = (value) => {
        this.setState({val2: value})
    };
    _calculationResult = () => {
        let {val1, val2} = this.state;
        let isValid1 = val1.match(/^-{0,1}\d+$/);
        if (isValid1) {
            this.setState({result: val1 * val2})
            return;
        }
        alert('Tidak dapat dihitung, periksa nomor yang anda masukkan');
    }

    tadaCal2Maind = () => {
        let {tadacalapk} = this.state;
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Text>Tadacal apk</Text>
                        <Paragraph>Kalkulator Utama Tadacal</Paragraph>
                        <TextInput mode={"outlined"} value={tadacalapk.n1} onChangeText={this._handleTadaCallApk}/>
                    </Card.Content>
                </Card>
            </View>
        )
    }

    render() {
        let {degres, val1, val2, result} = this.state;
        return (
            <ScrollView contentContainerStyle={{padding:20}}>
                <View style={{flex: 1, flowGrow: 1, padding: 20}}>
                    <Text>Pilih Jenis Kalkulator yang kalian inginkan</Text>
                    <Picker
                        // enabled={}
                        // selectedValue={}
                        onValueChange={value => {
                            this.setState({})
                        }
                        }>
                        {
                            this.state.menuKalkulator.map((note, key) => (
                                <Picker.Item key={key} label={note.name}
                                             value={note.value}/>
                            ))
                        }
                    </Picker>
                </View>
                <Card>
                    <Card.Title title="TADACAL APK" subtitle="Aplikasi perhitungan alat berat"/>
                    <Card.Content>
                        <View>
                            <TextInput number={true} mode={"outlined"} label={"Masukkan Nilai"} value={val1}
                                       onChangeText={this._handleNilai1}/>
                            {this.PickerOption()}
                            <Button onPress={this._calculationResult} style={{marginTop: 20}} mode={"contained"}>Hitung
                                Hasil</Button>
                            <View style={{marginTop: 30, flex: 1, flewGrow: 1}}>
                                <Text style={{textAlign: 'center', fontSize: 100, flex: 1, flexGrow: 1}}>{result}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        )
    }

}