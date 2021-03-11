import React from 'react';
import { BrowserRouter, Switch , Route   } from 'react-router-dom';
import Postres from '../pages/Postres';
import Home from "../pages/Home";
import Layout from '../components/layout';

function App() {
  return (
    <BrowserRouter> 
      <Layout>
        <Switch>
            <Route exact path="/postres/" component={Postres} />
            <Route exact path="/" component={Home} />
        </Switch> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;
