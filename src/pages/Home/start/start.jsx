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
import imghom from "../../images/about-img.jpg"

import "../home.css"


function Homestart() {
    return (
        <>   <Box >
            <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={12} sm={11} md={10.4} lg={8.7} xl={7.9}  >
                    <Typography sx={{ background: "#191919" }}>
                        <Box sx={{ flexGrow: 1 }} >
                            <Grid container justifyContent="center" spacing={0}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
                                    <img src={imghom} alt="" width={"100%"} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
                                    <CardContent sx={{ width: "93%", paddingLeft: "30px" }}>
                                        <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "0px", marginBottom: "10px" }}>
                                            Startup Business
                                        </Typography>
                                        <Typography sx={{ margin: "0 0 5px" }} >
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.
                                        </Typography>
                                        <Typography sx={{ margin: "0 0 0px", marginBottom: "20px" }}>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                                        </Typography>
                                        <Link sx={{ marginTop: "10px", color: "#fff" }} id="start_btn">LEARN MORE</Link>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    )

}
export default Homestart