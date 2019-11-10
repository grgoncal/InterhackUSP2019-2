import React from "react";

// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Typography, Box } from "@material-ui/core";

// ICONS
import LinkIcon from '@material-ui/icons/Link';
import PersonIcon from '@material-ui/icons/Person';

class Footer extends React.Component {
    state = {};
    render() {
        return (
             <React.Fragment>
                 <CssBaseline />
                 <hr></hr>
                 <Container>
                    <Grid spacing={2} container style={{ marginTop: "6vh", marginBottom: "8vh" }}>
                        <Grid item xs>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sobre nós"></ListItemText>
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem>
                                    <Link color='inherit'onClick={ () => {
                                        window.location.href = "https://github.com/gustavopdo";
                                    }}> &#60; Gustavo Pedralino /> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='inherit'onClick={ () => {
                                        window.location.href = "https://github.com/grgoncal";
                                    }}> &#60; Guilherme Rocha /> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='inherit'onClick={ () => {
                                        window.location.href = "https://github.com/turqueti";
                                    }}>&#60; Vitor Turqueti /> </Link>
                                </ListItem>
                                <ListItem>
                                    <Link color='inherit'onClick={ () => {
                                        window.location.href = "https://github.com/marco7m";
                                    }}>&#60; Marco Aurélio /> </Link>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <LinkIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Nossos links:" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem>
                                    <ListItemText primary={
                                        <Link color='inherit'onClick={ () => {
                                            window.location.href = "https://github.com/grgoncal/InterhackUSP2019-2";
                                        }}>GitHub deste projeto</Link>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={
                                        <Link color='inherit'onClick={ () => {
                                            window.location.href = "https://interhack.xyz/2019";
                                        }}>Interhack USP 2019</Link>} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs>
                            <img src={require("./interhack.png")} style={{ height: "18vh" }}></img>
                        </Grid>
                    </Grid>
                    <Typography variant="subtitle2" style={{marginBottom: "1vh"}}>
                        <Box fontFamily="Montserrat" color="#7a7a7a">
                            Gustavo Pedralino, Marco Aurélio, Vitor Turqueti, Guilherme Rocha. Novembro 2019.
                        </Box>
                    </Typography>
                 </Container>
             </React.Fragment>
        );
    }
}

export default Footer;