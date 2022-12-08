import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Copiy from '../copiy/copiy';
import aboi from "../images/team1.jpg";
import aboi1 from "../images/team2.jpg";
import aboi2 from "../images/team3.jpg";
import "./about.css"
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}


function About() {
    return (
        <Box id="abo">
            <Typography id="abo_home">

            </Typography>
            <Box sx={{ textAlign: "center", marginTop: "4%" }}>
                <Grid container justifyContent="center" spacing={4} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                        <CardContent sx={{ width: "93%", paddingLeft: "30px" }}>
                            <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>
                                Meet the crew!
                            </Typography>
                            <Typography sx={{ fontSize: "14px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br /> euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                            </Typography>

                        </CardContent>
                    </Grid>
                </Grid>
                <Typography>
                    <Box >
                        <Grid container justifyContent="center" spacing={0}>
                            <Grid item xs={12} sm={11} md={10} lg={8.7} xl={9}  >
                                <Grid container justifyContent="center" spacing={4}>
                                    <Grid item xs={12} sm={3.7} md={4} lg={4} xl={3.4} >
                                        <Card sx={{ background: "#101010" }} id="about_i" >
                                            <Box sx={{ marginTop: "5%" }}>
                                                <img src={aboi} width={"88%"} alt="" />
                                            </Box>
                                            <CardContent sx={{ textAlign: "start", fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "1px", marginBottom: "10px" }} >
                                                <Typography component="div" sx={{ color: "#fff", paddingBottom: "10px", fontWeight: "bold", fontSize: "24px" }} >
                                                    LINDA
                                                </Typography>
                                                <Typography component="div" sx={{ color: "#d54ab6", paddingBottom: "10px", marginTop: "10px", fontWeight: "bold", fontSize: "19px" }} >
                                                    Creative Director
                                                </Typography>
                                                <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3.7} md={4} lg={4} xl={3.4} >
                                        <Card sx={{ background: "#101010" }} id="about_i">
                                            <Box sx={{ marginTop: "5%" }}>
                                                <img src={aboi1} width={"88%"} alt="" />
                                            </Box>
                                            <CardContent sx={{ textAlign: "start", fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "1px", marginBottom: "10px" }} >
                                                <Typography component="div" sx={{ color: "#fff", paddingBottom: "10px", fontWeight: "bold", fontSize: "24px" }} >
                                                    JULIA
                                                </Typography>
                                                <Typography component="div" sx={{ color: "#d54ab6", paddingBottom: "10px", marginTop: "10px", fontWeight: "bold", fontSize: "19px" }} >
                                                    UX Designer
                                                </Typography>
                                                <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={3.7} md={4} lg={4} xl={3.4}  >
                                        <Card sx={{ background: "#101010" }} id="about_i">
                                            <Box sx={{ marginTop: "5%" }}>
                                                <img src={aboi2} width={"88%"} alt="" />
                                            </Box>
                                            <CardContent sx={{ textAlign: "start", fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "1px", marginBottom: "10px" }} >
                                                <Typography component="div" sx={{ color: "#fff", paddingBottom: "10px", fontWeight: "bold", fontSize: "24px" }} >
                                                    MARY
                                                </Typography>
                                                <Typography component="div" sx={{ color: "#d54ab6", paddingBottom: "10px", marginTop: "10px", fontWeight: "bold", fontSize: "19px" }} >
                                                    Frontend Developer
                                                </Typography>
                                                <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" spacing={1}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} id='hr'>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center" spacing={1}>
                                    <Grid item xs={11} sm={5} md={5} lg={5} xl={5}  >
                                        <CardContent sx={{ textAlign: "start", fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "1px", marginBottom: "10px" }} >
                                            <Typography component="div" sx={{ color: "#fff", paddingBottom: "10px", fontWeight: "bold", fontSize: "24px" }} >
                                                Onetel Design Studio
                                            </Typography>
                                            <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.
                                            </Typography>
                                            <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={11} sm={5} md={5} lg={5} xl={5}  >
                                        <Box sx={{ width: "100%" ,textAlign:"start",marginBottom:"10%"}}>
                                            <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>
                                            HTML5  CSS3
                                            </Typography>
                                            <Slider
                                                aria-label="Temperature"
                                                defaultValue={70}
                                                sx={{ color: "#fbc02d" }}


                                            />
                                            <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>
                                           
                                            BOOTSTRAP 
                                            </Typography>
                                            <Slider
                                                aria-label="Temperature"
                                                defaultValue={70}
                                                sx={{ color: "#e64a19" }}

                                            />
                                            <Typography sx={{ color: "#808080", fontFamily: "'Montserrat', sans-serif", fontSize: "16px" }}>
                                            UX Design
                                            </Typography>

                                            <Slider
                                                aria-label="Temperature"
                                                defaultValue={70}
                                                sx={{ color: "#1976d2" }}


                                            />
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>


                    </Box>
                </Typography>

            </Box>

            <Copiy />
        </Box>








    )

}
export default About