import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Orden from '../pages/Orden'
import Home from '../pages/Home'
import Layout from '../components/layout'
import Login from '../pages/Login'
import Platillos from '../pages/Platillos'
import Postres from '../pages/Postres'
import Register from '../pages/register'
import NotFound from '../pages/NotFound'
// import prueba from '../pages/prueba'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/orden/' component={Orden} />
          <Route exact path='/login/' component={Login} />
          <Route exact path='/platillos/' component={Platillos} />
          <Route exact path='/postres/' component={Postres} />
          <Route exact path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App

// <Route exact path='/prueba' component={prueba} />
