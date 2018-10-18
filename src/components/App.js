import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './common'
import LoginForm from './LoginForm'

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyB0vY7NnCtWlbTXnjyGU_YyKL2qtnXc5U8',
            authDomain: 'react-native-auth-92952.firebaseapp.com',
            databaseURL: 'https://react-native-auth-92952.firebaseio.com',
            projectId: 'react-native-auth-92952',
            storageBucket: 'react-native-auth-92952.appspot.com',
            messagingSenderId: '794299098839'
          })
    }

    render(){
        return(
            <View>
                <Header
                    headerText='Authentication'
                />
                <LoginForm />
            </View>
        )
    }
}

export default App;