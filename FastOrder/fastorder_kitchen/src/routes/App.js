import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Layout from '../components/layout'
import CreateMenu from '../pages/Create_Menu'
import Login from '../pages/Login'
import Register from '../pages/Register'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login/' component={Login} />
          <Route exact path='/create_menu/' component={CreateMenu} />
          <Route exact path='/register/' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
