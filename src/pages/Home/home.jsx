import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Homestart from './start/start';
import Copiy from '../copiy/copiy';
import imghom from "../images/about-img.jpg"
import img1 from "../images/portfolio-img1.jpg"
import img2 from "../images/portfolio-img2.jpg"
import img3 from "../images/portfolio-img3.jpg"
import img4 from "../images/portfolio-img4.jpg"
import img5 from "../images/portfolio-img5.jpg"
import img6 from "../images/portfolio-img6.jpg"
import img7 from "../images/portfolio-img7.jpg"

import "./home.css"


function Home() {
    return (
        <Box id="sas">
            <Typography id="home">
                <Typography className="container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={1} sm={2} md={6} lg={6} xl={6} sx={{ width: "100%" }} >
                            </Grid>
                            <Grid item xs={10} sm={7.5} md={6} lg={6} xl={6} sx={{ paddingLeft: { xl: "20%" } }}>
                                <Typography gutterBottom variant="h3" component="div" sx={{ color: "#fff", fontSize: "40px", fontWeight: "bold" }}>
                                    welcome to <br />Onetel Design Studio
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Typography>
            </Typography>
            <Typography id="home_icone" sx={{ marginBottom: "100px", paddingLeft: "15px", paddingRight: "15px", marginLeft: "auto", marginRight: "auto" }} >
                <Box sx={{ flexGrow: 1, borderRadius: "20px" }}>
                    <Grid container justifyContent="center" spacing={4} >
                        <Grid item xs={12} sm={5.5} md={3.5} lg={3} xl={2.7} id="hom_ic"  >
                            <Card sx={{ padding: "40px 20px 10px 10px", background: "#c14000" }} id="hom_icc">
                                <Box id="icon_home" >
                                    <ComputerIcon sx={{ width: "70px", color: "#fff", fontSize: "35px", marginTop: "-30%", marginLeft: "5%" }} />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold" }}>
                                        Responsive
                                    </Typography>
                                    <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "13.5px", margin: "0 0 10px" }} >
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={5.5} md={3.5} lg={3} xl={2.7} id="hom_ic" >
                            <Card sx={{ padding: "40px 20px 10px 10px", background: "#009988" }} id="hom_icc">
                                <Box id="icon_home" >
                                    <PhoneIphoneIcon sx={{ width: "80px", color: "#fff", fontSize: "35px", marginTop: "-30%", marginLeft: "-5%" }} />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold" }}>
                                        Easy to use
                                    </Typography>
                                    <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "13.5px", margin: "0 0 10px" }} >
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={11} md={3.5} lg={3} xl={2.7} id="hom_ic" >
                            <Card sx={{ padding: "40px 20px 10px 10px", background: "#ffa500" }} id="hom_icc">
                                <Box id="icon_home" >
                                    <SportsSoccerIcon sx={{ width: "80px", color: "#fff", fontSize: "35px", marginTop: "-30%", marginLeft: "-5%" }} />
                                </Box>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold" }}>
                                        Quick Support
                                    </Typography>
                                    <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "13.5px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Typography>
            <Homestart />
            <Box sx={{ textAlign: "center", marginTop: "4%" }}>
                <Grid container justifyContent="center" spacing={4} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                        <CardContent sx={{ width: "93%", paddingLeft: "30px" }}>
                            <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>
                                Recent Projects
                            </Typography>
                            <Typography sx={{ fontSize: "14px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br /> nibh euismod tincidunt ut laoreet.
                            </Typography>

                        </CardContent>
                    </Grid>
                </Grid>
                <Typography>
                    <Box >
                        <Grid container justifyContent="center" spacing={0}>
                            <Grid item xs={12} sm={11} md={10.4} lg={8.7} xl={7.9}  >
                                <Grid container justifyContent="center" spacing={0}  >
                                    <Grid container justifyContent="center" spacing={0}  >
                                        <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                                            <Link href={img1} ><img src={img1} width={"100%"} alt="" /></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={4} lg={4} xl={4} >
                                            <Link href={img2}><img src={img2} alt="" width={"100%"} /></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={4} md={4} lg={4} xl={4} >
                                            <Link href={img3}><img src={img3} alt="" width={"100%"} /></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                            <Link href={img4}><img src={img4} alt="" width={"100%"} /></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                            <Link href={img5}><img src={img5} alt="" width={"100%"} /></Link>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                            <Link href={img6}><img src={img6} alt="" width={"100%"} /></Link>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                                            <Link href={img7}><img src={img7} alt="" width={"100%"} /></Link>
                                        </Grid>
                                    </Grid>
                                    <Link sx={{ marginTop: "30px", color: "#fff",marginBottom:"70px" }} id="start_btn">View More</Link>
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
export default Home