import React, {Component ,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class FooterMobile extends Component {
    render() {
        return (
            <div className='m-0 bg-white shadow-sm'>
                <Container>
                    <Row className='px-0 py-5'>
                        <Col sm={6} xm={6}>
                            <h5 className='footer-menu-title mt-3'>OFFICE ADDRESS</h5>
                            <p>192 SatarKulRoad, Uttor Budda,Dhaka-1212 01818-103397 (Help-Line-01818-103397)</p>

                        </Col>
                        <Col sm={6} xm={6}>
                            <h5 className='footer-menu-title mt-5 '>THE COMPANY</h5>
                            <a href='' className='footer-link'>About us</a>
                            <a href='' className='footer-link'>Contact us</a>
                            <a href='' className='footer-link'>Our Team</a>
                            <a href='' className='footer-link'>How to Purchase</a>
                            <a href='' className='footer-link'>Privacy Policy</a>
                            <a href='' className='footer-link'>Refund Policy</a>

                        </Col>

                        <Col sm={6} xm={6}>
                            <h5 className='footer-menu-title mt-5'>SOCIAL LINK</h5>
                            <a href=''><i className='fab m-1 h4 fa-facebook'></i></a>
                            <a href=''><i className='fab m-1 h4 fa-instagram'></i></a>
                            <a href=''><i className='fab m-1 h4 fa-twitter'></i></a>

                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='footer pt-3 pb-1 bg-dark'>
                    <Container>
                        <Row className='px-0'>
                            <h6 className='text-white'>WE DELIVER IN</h6>
                            <p className='footer-text text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>


                        </Row>
                    </Container>

                </Container>

            </div>
        );
    }
}

export default FooterMobile;