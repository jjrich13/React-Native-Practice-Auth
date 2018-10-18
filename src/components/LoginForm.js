import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        console.log(this.state);
        
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        onChangeText={value => this.setState({email: value})}
                        label='Email'
                        placeholder='user@email.com'
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        value={this.state.password}
                        onChangeText={value => this.setState({password: value})}
                        label='Password'
                        placeholder='password'
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={()=> console.log('Pressed')}    
                    >
                        Log In
                    </Button>
                </CardSection>

            </Card>
        )
    }
}


export default LoginForm;