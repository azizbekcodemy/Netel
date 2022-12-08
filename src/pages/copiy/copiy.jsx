import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import copiyimg from "../images/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { FaFacebookF,FaDribbble,FaPinterest ,FaBehance,FaEnvelope} from "react-icons/fa"

import "./copiy.css"


function Copiy() {
    return (

        <>
            <Typography id="copiy">
                <Box >
                    <Grid container justifyContent="center" spacing={0}>
                        <Grid item xs={12} sm={4.1} md={4.7} lg={3.2} xl={3}  >
                            <Card sx={{ background: "#1c1c1c", color: "#fff" }}>
                                <Box sx={{ marginLeft: "10%" }} >
                                    <img src={copiyimg} alt="" />
                                </Box>
                                <CardContent>
                                    <Typography sx={{ marginBottom: "15px", fontSize: "14px", opacity: "0.4" }}>
                                        Onetel is free Bootstrap v3.3.5 HTML5 layout from
                                        templatemo website.
                                        Feel free to use it for your website.
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: "20px", fontSize: "15px", opacity: "0.4" }}>
                                        010-020-0340
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: "20px", fontSize: "15px", opacity: "0.4" }}>
                                        info@company.com
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: "10px", fontSize: "15px", opacity: "0.4" }}>
                                        www.company.com
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12} sm={3} md={3} lg={2.4} xl={3}   >
                            <CardContent sx={{ color: "#fff" }}>
                                <Typography sx={{ marginBottom: "30px", fontWeight: "bold", fontSize: "24px" }}>
                                    Useful Links
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px", opacity: "0.4" }} >
                                    HTML5 Templates
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px", opacity: "0.4" }}>
                                    CSS3 Tricks
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px", opacity: "0.4" }}>
                                    Design Blog
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "15px", fontSize: "15px", opacity: "0.4" }}>
                                    Animations
                                </Typography>
                            </CardContent>
                        </Grid>


                        <Grid item xs={12} sm={4.3} md={4} lg={3} xl={3}  >
                            <CardContent sx={{ color: "#fff" }}>
                                <Typography sx={{ marginBottom: " 30px", fontWeight: "bold", fontSize: "24px" }}>
                                    Newsletter
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "20px", fontSize: "14px", opacity: "0.4" }} >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: " 15px" }}>
                                    <input name="email" type="email" placeholder="Enter your email" className="input" />
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: " 10px" }}>
                                    <button type="submit" name="submit" className="copy_btn">Submit</button>
                                </Typography>


                            </CardContent>
                        </Grid>
                    </Grid>

                </Box>
            </Typography>
            <Box>
                <Grid container justifyContent="center" spacing={0} sx={{gap:{sm:"30px"}}}>
                    <Grid item xs={12} sm={4.5} md={5} lg={5} xl={5}   >
                        <Typography sx={{ margin:"25px 5px 20px 0px", fontSize: "16px", opacity: "0.6" }}>
                        Copyright © 2084 Company Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5.5} md={5} lg={5} xl={3} sx={{marginLeft:{xs:"2%"},marginY:{xs:"2%"}}} >
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><FaFacebookF id="icon" /></Link>
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><TwitterIcon id="icon"/></Link>
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><FaDribbble id="icon"/></Link>
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><FaPinterest id="icon"/></Link>
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><FaBehance id="icon"/></Link>
                        <Link id='iconn' sx={{display:"inline-block",background:"#303030",margin:"1px 5px 0px 0px",width:"50px",height:"40px"}}><FaEnvelope id="icon"/></Link>
                    </Grid>
                </Grid>
            </Box>

        </>
    )

}
export default Copiy