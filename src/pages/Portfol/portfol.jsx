import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Copiy from '../copiy/copiy';
import "./portfol.css"
import img1 from "../images/portfolio-img1.jpg"
import img2 from "../images/portfolio-img2.jpg"
import img3 from "../images/portfolio-img3.jpg"
import img4 from "../images/portfolio-img4.jpg"
import img5 from "../images/portfolio-img5.jpg"
import img6 from "../images/portfolio-img6.jpg"
import img7 from "../images/portfolio-img7.jpg"
import img8 from "../images/portfolio-img8.jpg"
import img9 from "../images/portfolio-img9.jpg"
import img10 from "../images/portfolio-img10.jpg"




function Portfol() {
    return (
        <Box id="po">
            <Typography id="po_home">

            </Typography>
            <Box sx={{ textAlign: "center", marginTop: "4%" }}>
                <Grid container justifyContent="center"  >
                    <Grid container justifyContent="center" spacing={4} >

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}   >
                            <CardContent sx={{ width: "100%" }}>
                                <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>
                                Our Projects
                                </Typography>
                                <Typography sx={{ fontSize: "15px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br/>euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                    <Typography>
                        <Box sx={{marginBottom:"8%"}}>
                            <Grid container justifyContent="center" spacing={0}>
                                <Grid item xs={12} sm={10} md={10.2} lg={8.7} xl={7.9}  >
                                    <Grid container justifyContent="center" spacing={0}  >
                                        <Grid container justifyContent="center" spacing={0} sx={{marginLeft:{sm:"2%"}}}  >
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
                                            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                                <Link href={img7}><img src={img7} alt="" width={"100%"} /></Link>
                                            </Grid>
                                            <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                                                <Link href={img8}><img src={img8} alt="" width={"100%"} /></Link>
                                            </Grid>
                                            <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                                                <Link href={img9}><img src={img9} alt="" width={"100%"} /></Link>
                                            </Grid>
                                            <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                                                <Link href={img10}><img src={img10} alt="" width={"100%"} /></Link>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Box>
                    </Typography>
              </Grid>




            </Box>

            <Copiy />
        </Box>








    )

}
export default Portfol