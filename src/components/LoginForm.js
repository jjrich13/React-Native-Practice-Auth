import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        console.log('Pressed');

        const { email, password } = this.state;

        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() =>{
                console.log('First');
                
                this.onLoginSuccess()
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                    console.log('Created new user');
                    
                    this.onLoginSuccess()
                })
                .catch(() => {
                    console.log('Failed Creating New user');
                    
                    this.onLoginFail()
                })
        })
    }

    onLoginSuccess = () => {
        console.log('Hit success');
        
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: '' 
        })
    }

    onLoginFail = () => {
        console.log('Hit fail');
        
        this.setState({ 
            error: 'Authentication Failed.', 
            loading: false 
        })
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size='small' />
        }

        return (
            <Button
                onPress={this.onButtonPress}
            >
                Log In
            </Button>
        )
    }

    render() {
        console.log(this.state);

        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={value => this.setState({ email: value })}
                        label='Email'
                        placeholder='user@email.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={value => this.setState({ password: value })}
                        label='Password'
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}


export default LoginForm;