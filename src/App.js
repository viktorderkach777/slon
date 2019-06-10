import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';



function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Switch> 
      <Route exact path='/' component={Home}/>   
  
    </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
