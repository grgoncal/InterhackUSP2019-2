import React from 'react';

// MAP
import MapContainer from './mapcontainer';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';

class Itinerary extends React.Component {
    state = {};
    render() {
        return (
             <React.Fragment>
                 <Grid container alignItems="center" justify="center" style={{marginBottom: "60vh", width: "auto"}}>
                     <Grid item xs>
                        <MapContainer />
                     </Grid>
                 </Grid>
                 
             </React.Fragment>
        );
    }
}

export default Itinerary;