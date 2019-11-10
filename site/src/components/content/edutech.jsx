import React from 'react';

// MATERIAL UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import Link from '@material-ui/core/Link';

// PARALAX
import { Parallax, Background } from 'react-parallax';
const { red, blue, green } = require('@material-ui/core/colors');

class Edutech extends React.Component {
    state = {
        open: false
    };
    render() {
        return(
            <React.Fragment>
                {/* <Parallax
                    blur={10}
                    bgImage={require('')}
                    bgImageAlt="the cat"
                    strength={200}>
                    <Grid container alignItems="center" justify="center" style={{marginTop: "10vh", marginBottom: "10vh"}}>
                        <Grid item xs>

                        </Grid>
                    </Grid>
                </Parallax> */}

                <Parallax
                    blur={2}
                    bgImage={require('./back.jpeg')}
                    bgImageAlt="the cat"
                    strength={100}>

                    <Typography variant="h2" color="textPrimary" style={{marginTop: "5vh"}}>
                        <Box style={{fontFamily:"montserrat", color: "#FFFFFF"}}> 
                            Próximas visitas
                        </Box>
                    </Typography>

                    <Grid container justify="center" style={{marginTop: "10vh", marginBottom: "10vh"}} spacing={2}>

                        <Grid item xs={3} m={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Adolfino"
                                        height="120"
                                        width="auto"
                                        image={require('./adolfinocastanho.png')}
                                        title="Adolfino"/>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Adolfino Castanho
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Dia 18/10/2019 a 22/10/2019.
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={3} m={2}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Augusto Amaral"
                                        height="120"
                                        width="auto"
                                        image={require('./augustoamaral.png')}
                                        title="Augusto Amaral"/>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Augusto Amaral
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Dia 25/10/2019 a 29/10/2019.
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                </Parallax>

                <Grid container style={{marginTop: "5vh"}}> 
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            <Box>
                                Que tal algumas aulinhas, na faixa?
                            </Box>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">
                            <Box>
                                Não se preocupa, tem vídeo, texto, tem de tudo!
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid container justify="center" style={{marginTop: "5vh", marginBottom: "5vh"}}>
                    <Button variant="outlined" onClick={() => this.setState({ open: true })}>Manda Links</Button>

                    <AutoRotatingCarousel
                        label='Fechar'
                        autoplay={false}
                        open={this.state.open}
                        onClose={() => this.setState({ open: false })}
                        onStart={() => this.setState({ open: false })}
                        style={{ position: 'absolute' }}>

                        <Slide
                        media={<img src={require('./usp.png')} style={{width: "30vw"}} />}
                        mediaBackgroundStyle={{ backgroundColor: red[400] }}
                        style={{ backgroundColor: red[600] }}
                        title={
                            <React.Fragment>
                                <Link onClick={() => {
                                    window.location.href = "http://eaulas.usp.br/portal/home";
                                }}>E-aulas USP</Link>
                            </React.Fragment>
                        }
                        subtitle='Repositório de aulas online da Universidade de São Paulo.'/> 

                        <Slide
                        media={<img src={require("./edx.png")} style={{width: "30vw"}} />}
                        mediaBackgroundStyle={{ backgroundColor: green[300] }}
                        style={{ backgroundColor: green[600] }}
                        title={
                            <React.Fragment>
                                <Link onClick={() => {
                                    window.location.href = "https://www.edx.org";
                                }}>Edx</Link>
                            </React.Fragment>
                        }
                        subtitle='Plataforma de com conteúdo gratuito diretamennnte de Harvard e do MIT.'/>
                        
                        <Slide
                        media={<img src={require('./coursera.png')} style={{width: "30vw"}} />}
                        mediaBackgroundStyle={{ backgroundColor: blue[200] }}
                        style={{ backgroundColor: blue[600] }}
                        title={
                            <React.Fragment>
                                <Link onClick={() => {
                                    window.location.href = "https://www.coursera.org/";
                                }}>Coursera</Link>
                            </React.Fragment>
                        }
                        subtitle='Váaaarios cursos e aulas pra você aprender bem rápido.'/>

                    </AutoRotatingCarousel>
                </Grid>

            </React.Fragment>
        );
    }
}

export default Edutech;
