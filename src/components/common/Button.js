import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component{
    constructor(props){
        super(props)
    }
    
    render(){    
        console.log(this.state);
        const { buttonStyle, textStyle } = styles;
        
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={this.props.onPress}
            >
                <Text style={textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5
    }
}

export {Button};