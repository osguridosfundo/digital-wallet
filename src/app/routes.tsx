import React from 'react';
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import Home from 'pages/Home';

export const Routes = () => (
    <Router>
        <Route exact path="/" component={Home}/>
    </Router>
);
