import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/layout'
import Home from './components/Home'
import RegisterLogin from './components/Register_login/index'
import Register from './components/Register_login/register'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/register_login' exact component={RegisterLogin} />
        
        <Route path='/' exact component={Home} />
        
      </Switch>
    </Layout>

  )
}

export default Routes
