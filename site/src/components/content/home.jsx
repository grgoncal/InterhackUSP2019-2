import React from 'react';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Home extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Grid container alignItems="center" justify="center" style={{marginTop: "10vh", marginBottom: "10vh"}}>
                    <Grid item xs>
                        <img src={require('./van.png')} style={{width: '45vh', height: 'auto'}}></img>
                    </Grid>
                    <Grid item xs spacing={2}>
                        <Typography variant="h3" gutterBottom m={3} > 
                            <Box fontFamily="Montserrat" color="#3333cc">
                                VAN Pra Facu!
                            </Box>
                         </Typography>
                         <Typography variant="h5" gutterBottom m={3}>
                            <Box fontFamily="Montserrat" color="#191966">
                                Somos uma iniciativa que busca levar a galera pra universidade. Se liga, estaremos passando por várias escolas de São Paulo. Você sabia que você também pode sonhar com a faculdade?
                            </Box>
                         </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>       
             </React.Fragment>
        );
    }
}

export default Home;