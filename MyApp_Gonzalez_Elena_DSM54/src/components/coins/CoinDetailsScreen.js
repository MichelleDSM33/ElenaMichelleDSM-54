import React, { Component } from 'react';
import {View, Text} from 'react-native';

//declaración de un class component

class CoinDetailScreen extends Component{
    render(){
    return(
        <View> 
            <Text>Est Es mi pantalla de detalle</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "DarkSalmon"
    },
    text:{
        color : "#000",
        textAlign: "center",
    }

});

export default CoinDetailsScreen;
