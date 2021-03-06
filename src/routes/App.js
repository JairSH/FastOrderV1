import React from 'react';
import { BrowserRouter, Switch , Route   } from 'react-router-dom';
import Users from '../pages/Users';
import Home from "../pages/Home";
import Layout from '../components/layout';

function App() {
  return (
    <BrowserRouter> 
      <Layout>
        <Switch>
            <Route exact path="/users/" component={Users} />
            <Route exact path="/" component={Home} />
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;
