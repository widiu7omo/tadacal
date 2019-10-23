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
            enabledMenu: "TadaCal Apk",//default menu
            menuKalkulator: [{
                name: "TadaCal Apk",
                status: true,
                submenu: []
            },
                {
                    name: "Khusus Admissible Ground Pressures",
                    status: false,
                    submenu:
                        [
                            {name: "Asphalt", desc: "Perhitungan asphalt",screen:'Asphalt'},
                            {name: "Concrate B I", desc: "Perhitungan Concrate B I",screen:'Con1'},
                            {name: "Concrate B II", desc: "Perhitungan Concrate B II",screen:'Con2'},
                        ]
                }
            ],
            tadacalapk: {
                n1: '0',
                n2: '0',
                r1: '0'
            }
            ,
            tadacalapkData: [
                {name: "Admissible Ground", value: ""},
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
        <View
            style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between'}}>
            <Picker
                // enabled={}
                selectedValue={this.state.tadacalapk.n2}
                onValueChange={value => {
                    const tadacalapk = {...this.state.tadacalapk};
                    tadacalapk.n2 = value;
                    this.setState({tadacalapk})
                }
                }>
                {
                    this.state.tadacalapkData.map((value, key) => (
                        <Picker.Item key={key} label={value.name}
                                     value={value.value}/>
                    ))
                }
            </Picker>
            <Text style={{fontSize: 40, textAlign: 'center'}}>{this.state.tadacalapk.n2}</Text>
        </View>
    );
    _handleTadaCallApk = (value) => {
        let isNumber = value.match(/^-{0,1}\d+$/);
        console.log(value);
        let tadacalapk = {...this.state.tadacalapk}
        tadacalapk.n1 = value;
        if (isNumber) this.setState({tadacalapk});
        else {
            if (value === '') {
                tadacalapk.n1 = '';
                this.setState({tadacalapk});
            }
        }
    };
    _handleTadaCallOption = (value) => {
        this.setState({val2: value})
    };
    _calculationResult = () => {
        let {tadacalapk} = this.state;
        let isValid1 = tadacalapk.n1.match(/^-{0,1}\d+$/);
        let isValid2 = tadacalapk.n2.match(/^-{0,1}\d+$/);
        if (isValid1) {
            let tadacalapk = {...this.state.tadacalapk};
            tadacalapk.r1 = tadacalapk.n1 / tadacalapk.n2;
            this.setState({tadacalapk});
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

    CalculatorTadacal() {
        let {tadacalapk} = this.state;
        return (<Card>
            <Card.Title title="TADACAL APK" subtitle="Aplikasi perhitungan alat berat"/>
            <Card.Content>
                <View>
                    <TextInput keyboardType={"numeric"} mode={"outlined"} label={"Masukkan Nilai"}
                               value={tadacalapk.n1}
                               onChangeText={this._handleTadaCallApk}/>
                    {this.PickerOption()}
                    <Button onPress={this._calculationResult} style={{marginTop: 20}} mode={"contained"}>Hitung
                        Hasil</Button>
                    <View style={{marginTop: 30, flex: 1, flewGrow: 1}}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 100,
                            flex: 1,
                            flexGrow: 1
                        }}>{tadacalapk.r1}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>)
    }

    GroundPressure() {
        let {menuKalkulator} = this.state;
        let groundPressureCategory = menuKalkulator[1].submenu;
        return (
            <View>
                {
                    groundPressureCategory.map((submenu,index) => {
                        return <Card style={{marginTop:20}} key={index}>
                            <Card.Title title={submenu.name} subtitle={submenu.desc}/>
                            <Card.Actions>
                                <Button style={{float:'right'}} onPress={()=>this.props.navigation.navigate(submenu.screen)}>Buka</Button>
                            </Card.Actions>
                        </Card>
                    })
                }
            </View>)
    }

    render() {
        let {tadacalapk, menuKalkulator, enabledMenu} = this.state;
        return (
            <ScrollView contentContainerStyle={{padding: 20}}>
                <View style={{flex: 1, flowGrow: 1, padding: 20}}>
                    <Text>Pilih Jenis Kalkulator yang kalian inginkan</Text>
                    <Picker
                        // enabled={}
                        selectedValue={this.state.enabledMenu}
                        onValueChange={value => {
                            this.setState({enabledMenu: value})
                        }
                        }>
                        {
                            this.state.menuKalkulator.map((menu, key) => (
                                <Picker.Item key={key} label={menu.name}
                                             value={menu.name}/>
                            ))
                        }
                    </Picker>
                </View>
                {
                    enabledMenu === this.state.menuKalkulator[0].name ? this.CalculatorTadacal() :
                        this.GroundPressure()
                }
            </ScrollView>
        )
    }

}