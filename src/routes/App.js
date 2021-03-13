import React from 'react';
import { BrowserRouter, Switch , Route   } from 'react-router-dom';
import Orden from '../pages/Orden';
import Home from "../pages/Home";
import Layout from '../components/layout';
import Login from '../pages/Login';
import Register from '../pages/register';
import NotFound from '../pages/NotFound';


function App() {
  return (
    <BrowserRouter> 
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/orden/" component={Orden} />
            <Route exact path="/login/" component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={NotFound}/>
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;
