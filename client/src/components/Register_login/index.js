import React from 'react'
import MyButton from '../utils/button'

const RegisterLogin = () => {
  return (
    <div className='page_wrapper'>
      <div className='container'>
        <div className='register_login_container'>
          <div className='left'>
            <h1>New Customer</h1>
            <p>Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur Lorem ipsum dolor sit amet, consectrtur</p>
            <MyButton
              type='default'
              title='Create an account'
              linkTo='/register'
              addStyles={{
                margin: '10px 0px 0px 0px'
              }}
            />
          </div>
          <div className='right'>
            <h1>Existing Customer</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin
