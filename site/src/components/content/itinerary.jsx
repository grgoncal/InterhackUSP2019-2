import React from 'react';

// MAP
import MapContainer from './mapcontainer';

class Itinerary extends React.Component {
    state = {};
    render() {
        return (
             <React.Fragment>
                 <MapContainer />
             </React.Fragment>
        );
    }
}

export default Itinerary;