import React from 'react';
import { BrowserRouter, Switch , Route   } from 'react-router-dom';
import Users from '../pages/Users';
import Home from "../pages/Home";

function App() {
  return (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/users/" component={Users} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
