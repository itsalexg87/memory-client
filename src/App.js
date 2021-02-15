import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// MUI
import { Container } from '@material-ui/core';

// components
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Auth from './components/Auth/auth';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
