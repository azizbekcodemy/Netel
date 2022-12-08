import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Copiy from '../copiy/copiy';
import "./contact.css"
import Form from 'react-bootstrap/Form';
import ChampPages from '../Chamb/Champ';




function Contact() {
    return (
        <Box id="con">
            <Typography id="con_home">

            </Typography>
            <Box sx={{ textAlign: "center", marginTop: "4%" }}>
                <Grid container justifyContent="center"  >
                    <Grid container justifyContent="center" spacing={4} >

                        <Grid item xs={11} sm={12} md={12} lg={12} xl={12}   >
                            <CardContent sx={{ width: "100%" }}>
                                <Typography gutterBottom component="div" sx={{ fontSize: "30px", color: "#fff", fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>
                                    Our Projects
                                </Typography>
                                <Typography sx={{ fontSize: "15px", margin: "0 0 10px", display: "block", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px" }} >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br />euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.
                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={4} sx={{marginBottom:"60px" }}>

                        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}   >
                            <Form>
                                <Form.Group className="mb-3" style={{ textAlign: "start" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="email" id="innn" />
                                </Form.Group>
                                <Form.Group className="mb-3" style={{ textAlign: "start" }} controlId="exampleForm.ControlInput1">
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control type="email" id="innn" />
                                </Form.Group>
                            </Form>


                        </Grid>
                        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}   >
                            <Form style={{ textAlign: "start", marginBottom: "10px" }}>
                                <Form.Group className="mb-3" style={{ textAlign: "start" }} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>MASSAGE</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="text" />
                                </Form.Group>
                                <Typography variant="body2" sx={{ marginBottom: " 10px" }}>
                                    <button type="submit" name="submit" className="copy_btn">Submit</button>
                                </Typography>

                            </Form>


                        </Grid>
                        <Grid item xs={12} sm={4} md={3} lg={3} xl={3}   >
                            <CardContent sx={{ color: "#fff", textAlign: "start"}} >
                                <Typography sx={{ marginBottom: "1px", fontWeight: "bold", fontSize: "24px" }}>
                                    Email
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "1px", fontSize: "15px", opacity: "0.4" }} >
                                    info@company.com
                                </Typography>
                                <Typography sx={{ marginBottom: "1px", fontWeight: "bold", fontSize: "24px" }}>
                                    Phones
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: "1px", fontSize: "15px", opacity: "0.4" }} >
                                    010-020-0340 | 090-080-0760
                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={1} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={9.3}   >
                            <CardContent sx={{ color: "#fff", textAlign: "start",marginBottom:"50px" }} >
                                <Typography sx={{ marginBottom: "1px", fontWeight: "bold", fontSize: "24px" }}>
                                    Location
                                </Typography>
                                <Typography className='gogle'>
                                    <Box>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47955.529859584916!2d69.26172159999999!3d41.304064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1665154251123!5m2!1sru!2s"
                                            width="100%" height="450" style={{ border: 0 }} allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </Box>
                                </Typography>

                            </CardContent>
                        </Grid>
                    </Grid>
                    <ChampPages/>

                </Grid>




            </Box>

            <Copiy />
           
        </Box >








    )

}
export default Contact