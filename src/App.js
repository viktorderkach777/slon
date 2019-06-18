import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import AnimalWidget from './components/animal';
import ProductWidget from './components/product';
import AnimalCreate from './components/animal/add';



function App() {
  return (   
    <Layout>
    <Switch> 
      <Route exact path='/' component={Home}/>   
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/animal' component={AnimalWidget}/>
      <Route exact path='/product' component={ProductWidget}/>
      <Route exact path='/animal/add' component={AnimalCreate}/>
    </Switch>
    </Layout>    
  );
}

export default App;
