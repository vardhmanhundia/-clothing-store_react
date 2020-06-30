import React from 'react';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.components';
class SignIn extends React.Component
{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (e) => {
        const { value, name} = e.target;
        this.setState({
            [value] : name
        });
        
    }
    
    render()
    { 
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit = {this.handleChange}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
