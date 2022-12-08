import React from "react"
import { Box, Button, Container, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { color } from "@mui/system"
import aboutIcon from "../Chamb/images/about-icon-1.png"
import aboutIcon1 from "../Chamb/images/about-icon-2.png"
import aboutIcon2 from "../Chamb/images/about-icon-3.png"
import "./style.css"



function ChampPages() {
    return (
        <>
            <Box>
                <Box sx={{
                    backgroundColor: "#09284b",
                    backgroundImage: "linear-gradient(to bottom, #010f1f 0, #051b34 100%)",
                    position: "relative"
                }}>
                    <Box className="champ_url" sx={{
                        position: "absolute",
                        width: { xl: "56%", lg: "56%", md: "89%", sm: "100%", xs: "100%" },
                        top: "15%",
                        left: { xl: "20%", lg: "20%", md: "5%", sm: "-5%", sx: "-60%" },
                        height: { xl: "67%", lg: "67%", md: "67%", sm: "68%", xs: "60%" },
                    }}></Box>

                    <Grid container justifyContent="center"  >
                        <Box sx={{ marginLeft: "-15px", marginRight: "-15px" }}>
                            <Grid container justifyContent="center" textAlign="start">
                                <Grid item xl={6} lg={6} md={10.6} sm={10.7} xs={10} spacing={0}>
                                    <Box sx={{ position: "relative" }}>
                                        <Typography sx={{
                                            color: "#fff",
                                            fontSize: { xl: "49px", lg: "49px", md: "49px", sm: "49px", xs: "26px" },
                                            fontWeight: "400",
                                            lineHeight: "59.92px",
                                            marginBottom: "60px",
                                            marginTop: "125px"
                                        }}>Expand business.
                                            Inspiring you to success.
                                        </Typography>
                                        <Typography sx={{
                                            color: "#fff",
                                            fontSize: { xl: "20px", lg: "20px", md: "20px", sm: "20px", xs: "18px" },
                                            fontWeight: 300,
                                            lineHeight: "36px",
                                            marginBottom: "85px"
                                        }}>Here at Chamb, we want you to find new connections,
                                            grow profitable relationships, and make more money than you could ever dream
                                            of making. Sound like something you’d like to do? Then what are you reading this for?
                                            <br />
                                            <br />
                                            Go sign up and get inspired!
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={4} sx={{ marginBottom: "150px", gap: { xl: "8%", lg: "8%", md: "14%", sm: "8%", xs: "-4%" } }}>
                                        <Grid item xl={2.8} lg={3} md={2.3} sm={3} xs={4} >
                                            <img src={aboutIcon} alt="" width={"100%"} height={"auto"} />
                                        </Grid>
                                        <Grid item xl={2.8} lg={3} md={2.3} sm={3} xs={4} >
                                            <img src={aboutIcon1} alt="" width={"100%"} height={"auto"} />
                                        </Grid>
                                        <Grid item xl={2.8} lg={3} md={2.3} sm={3} xs={4} >
                                            <img src={aboutIcon2} alt="" width={"100%"} height={"auto"} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{
                    backgroundColor: "#021020",
                    position: "relative"
                }}>
                    <Box sx={{
                        backgroundColor: "#051b34",
                        height: "50%",
                        position: "absolute",
                        width: "100%"
                    }}></Box>
                    <Grid container justifyContent="center"  >
                        <Box sx={{ marginLeft: "-15px", marginRight: "-15px" }}>
                            <Grid container justifyContent="center" textAlign="start">
                                <Grid item xl={6} lg={6} md={10.6} sm={10.7} xs={10} spacing={0}>
                                    <Box sx={{
                                        marginBottom: "20px",
                                        backgroundColor: "#fff",
                                        boxShadow: "0 1px 1px rgb(0 0 0 / 5%)"
                                    }}>
                                        <Box sx={{
                                            padding: "58px 65px",
                                            background: "#FFF"
                                        }}>
                                            <Typography sx={{
                                                color: "#333",
                                                fontSize: { xl: "28px", lg: "28px", md: "28px", sm: "28px", xs: "28px" },
                                                fontWeight: "400",
                                                lineHeight: "56px",
                                                marginBottom: "40px",
                                            }}>What Does Chamb Do
                                            </Typography>
                                            <Typography sx={{
                                                color: "#333",
                                                fontSize: { xl: "16px", lg: "16px", md: "16px", sm: "16px", xs: "16px" },
                                                fontWeight: 400,
                                                lineHeight: "32px",
                                                marginBottom: "40px"
                                            }}>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}
export default ChampPages