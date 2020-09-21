import React, { Component } from 'react'
import FormField from '../utils/Form/formfield'
import { update, generateData, isFormValid } from '../utils/Form/formActions'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user_actions'

class Register extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formdata: {}
  }
  render () {
    return (
      <div>Register</div>
    )
  }
}

export default connect()(Register)
