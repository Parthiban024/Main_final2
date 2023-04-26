import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import { CardMedia } from '@mui/material';
import TextField from "@mui/material/TextField";
import Navbar from "./navbarPage"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleTicketButtonClick = () => {
        navigate('/form');
    };
    const handleTicketButtonClickTwo = () => {
        navigate('/formTimechamp');
    };
    const handleTicketButtonClickThree = () => {
        navigate('/formHr');
    };
    return (
        <div className="">
            <Navbar />
            <div className="hm_sec_2 d-flex justify-content-center align-items-center animated-text flex-column">
                <h2 className="color mt-2 font_header1"><strong>Welcome to Our Objectways Ticket Raising Website!</strong></h2>
                <h3 className="mt-2 color1 font_header2"><strong>Hi,How can we help you?</strong></h3>
            </div>
            <div className="hm_sec_3">
                <div className="d-flex card_hm justify-content-center align-items-center">
                    <CardGroup className="d-flex gap-5">
                        <Card className="card_two">
                            <Card.Body>
                                <Card.Title className="text-center color mt-2">
                                <strong>IT TEAM</strong>
                                </Card.Title>
                                <Card.Text className="text-center mt-3">
                                <p className="center Card-body">Our IT team is responsible for providing technical support and solutions for all of our organization's technology needs. We are committed to ensuring that our systems are secure, reliable, and up-to-date. If you need assistance with any IT-related issues, please don't hesitate to reach out to us.</p>
                                {/* <p className="center">To raise a support ticket, simply visit our website and fill out the form provided. Please provide as much detail as possible about the issue you are experiencing, including any error messages you have received and steps you have taken to try and resolve the issue.</p> */}
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <a className="btn btn-primary btn_hm mt-4" onClick={handleTicketButtonClick}><strong>RAISE A TICKET</strong></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="card_two">
                            <Card.Body>
                                <Card.Title className="text-center color mt-2"><strong>FACILITY TEAM</strong></Card.Title>
                                <Card.Text className="text-center mt-3">
                                <p className="center Card-body">Our facility team is responsible for ensuring that our facilities are clean, safe, and well-maintained. We take pride in our work and are committed to providing the highest level of service to our customers. If you have any questions or concerns, please don't hesitate to contact us.</p>   
                                {/* <p className="center">If you have any questions or concerns about our facilities, please do not hesitate to contact us. We are here to provide you with the support and assistance you need to ensure that your experience with us is a positive one.</p> */}
                                </Card.Text>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-primary btn_hm mt-4" onClick={handleTicketButtonClickTwo}><strong>RAISE A TICKET</strong></a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="card_two">
                            <Card.Body>
                                <Card.Title className="text-center color mt-2">
                                <strong>HR TEAM</strong>
                                </Card.Title>
                                <Card.Text className="text-center mt-3">
                                <p className="center Card-body">Our HR team supports employee professional development and well-being. We handle recruitment, onboarding, training, benefits, and conflict resolution. Contact us for employment-related questions or concerns. We are committed to upholding company policies and ensuring compliance with employment laws regulations.</p>
                                {/* <p className="center">If you need to submit a ticket to our HR team, please include as much detail as possible about the issue or request. This will help us to better understand your needs and provide a prompt and accurate response.</p> */}
                                </Card.Text>
                                <div className="d-flex justify-content-center mt-3">
                                    <a className="btn btn-primary btn_hm " onClick={handleTicketButtonClickThree}><strong>RAISE A TICKET</strong></a>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>
               
                </div>
    
               

            </div>
            <Footer/>
        </div>



    )
}

export default DashboardPage;