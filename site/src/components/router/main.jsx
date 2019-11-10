import React from 'react';

// ROUTER
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import Home from '../content/home';
import Itinerary from '../content/itinerary';

class Main extends React.Component {
    state = {};
    render() {
        return (
             <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route path='/itinerary' component={Itinerary} />
             </Switch>
        );
    }
}

export default Main;