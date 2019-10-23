import React from 'react';
import {ScrollView, Image, Text, View, StyleSheet} from "react-native";
import {Card, Headline, Title} from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        // height: 100,
        // width: 200
        marginLeft:'auto',
        marginRight:'auto'
    },
    center: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    card: {
        marginTop: 20,
    }
});

export default class DetailReferenceScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = ({navigation}) => {
        let data = navigation.getParam('data', 'Default');
        if (Object.entries(data).length !== 0) {
            return {title: data.name}
        }
        return {title: 'Undefined'}
    };

    render() {
        let data = this.props.navigation.getParam('data', []);
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Headline style={{fontWeight:'bold',textAlign: "center", marginTop: 20,marginBottom:20}}>MENENTUKAN REEVING PATTERN</Headline>
                    {
                        data.images.map((image, index) =>
                            (<View key={index}>
                                {index === 1 ? <Text
                                    style={{fontSize: 60, fontWeight: 'bold', textAlign: 'center'}}>+</Text> : null}
                                {index === 2 ? <Text
                                    style={{fontSize: 60, fontWeight: 'bold', textAlign: 'center'}}>=</Text> : null}
                                <Card elevation={3}>
                                    <Card.Content style={styles.card}>
                                        <Text style={styles.text}>{image.caption}</Text>
                                        <View style={styles.center}>
                                            <Image style={styles.image} key={index} source={image.url!==''?image.url:null}/>
                                        </View>
                                        {image.weight !== ""?<Text style={styles.text}>{image.weight}</Text>:null}
                                    </Card.Content>
                                </Card>
                            </View>)
                        )
                    }
                </View>
            </ScrollView>
        );
    }
}