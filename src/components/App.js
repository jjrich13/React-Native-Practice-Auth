import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './common'
import LoginForm from './LoginForm'

class App extends Component {
    state = {
        loggedIn: null
    }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyB0vY7NnCtWlbTXnjyGU_YyKL2qtnXc5U8',
            authDomain: 'react-native-auth-92952.firebaseapp.com',
            databaseURL: 'https://react-native-auth-92952.firebaseio.com',
            projectId: 'react-native-auth-92952',
            storageBucket: 'react-native-auth-92952.appspot.com',
            messagingSenderId: '794299098839'
        })
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true})
            } else{
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return(
                    <Button
                        onPress={() => firebase.auth().signOut()}
                    >
                        Log Out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner />
        }
    }

    render(){
        return(
            <View>
                <Header
                    headerText='Authentication'
                />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;