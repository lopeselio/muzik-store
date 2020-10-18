import React, { Component } from 'react';
import axios from 'axios';

import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/formActions';

import Dialog from '@material-ui/core/Dialog';

class ResetPass extends Component {

    state = {
        resetToken: '',
        formError: false,
        formErrorMessage: '',
        formSuccess: '',
        formdata: {
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata, 'reset_pass');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formdata, 'reset_pass');
        let formIsValid = isFormValid(this.state.formdata, 'reset_pass')

        if (formIsValid) {
            axios.post('/api/users/reset_password',
            {
                ...dataToSubmit,
                resetToken: this.state.resetToken
            }
        ).then(response => {
            if(!response.data.success){
                this.setState({
                    formError: true,
                    formErrorMessage: response.data.message
                })
            } else {
                this.setState({formError:false, formSuccess: true});
                setTimeout(()=>{
                    this.props.history.push('/register_login')
                }, 3000)
            }
        })

        } else {
            this.setState({
                formError: true
            })
        }
    }

    componentDidMount() {
        const resetToken = this.props.match.params.token;
        this.setState({ resetToken })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <h2>Reset password</h2>

                    <div className="form_block_two">
                        <div className="block">
                            <FormField
                                id={'password'}
                                formdata={this.state.formdata.password}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                        <div className="block">
                            <FormField
                                id={'confirmPassword'}
                                formdata={this.state.formdata.confirmPassword}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </div>

                    <div>
                        {this.state.formError ?
                            <div className="error_label">
                                {this.state.formErrorMessage}
                            </div>
                            : ''}
                        <button onClick={(event) => this.submitForm(event)}>
                           Reset password
                        </button>
                    </div>
                </form>


                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>Alright !!</div>
                        <div>
                            Your password was reseted...you will be redirected
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default ResetPass;