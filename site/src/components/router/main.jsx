import React from 'react';

// ROUTER
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Home from '../content/home';

class Main extends React.Component {
    state = {};
    render() {
        return (
             <Switch>
                 <Route exact path='/' component={Home}/>
             </Switch>
        );
    }
}

export default Main;