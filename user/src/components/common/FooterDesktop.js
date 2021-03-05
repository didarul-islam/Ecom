import React, {Component ,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AbstractNav from "react-bootstrap/AbstractNav";
import { Link } from 'react-router-dom';

class FooterDesktop extends Component {
    render() {
        return (
            <Fragment>
                <div className='card'>
                    <Container fluid={true} className='pl-5'>
                        <Row className='px-0 my-5'>
                            <Col className='p-2 ' lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title '>ABOUT COMPANY</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                                <a href=''><i className='fab m-1 h4 fa-facebook'></i></a>
                                <a href=''><i className='fab m-1 h4 fa-instagram'></i></a>
                                <a href=''><i className='fab m-1 h4 fa-twitter'></i></a>
                            </Col>
                            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title '>THE COMPANY</h5>
                                <a href='' className='footer-link'>About us</a>
                                <Link to= '/contact' href='' className='footer-link'>Contact us</Link>
                                <a href='' className='footer-link'>Our Team</a>
                                <h5 className='footer-menu-title mt-3'>OFFICE ADDRESS</h5>
                                <p>192 SatarKulRoad, Uttor Budda,Dhaka-1212 01818-103397 (Help-Line-01818-103397)</p>


                            </Col>
                            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title'>MORE INFO</h5>
                                <a href='' className='footer-link'>How to Purchase</a>
                                <a href='' className='footer-link'>Privacy Policy</a>
                                <a href='' className='footer-link'>Refund Policy</a>

                            </Col>
                            <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                                <h5 className='footer-menu-title'>DOWNLOAD APP</h5>
                                <a><img className="" src="https://hatil.com/sites/default/files/Apple%20sign.png"/></a><br/>
                                <a><img className="mt-2" src="https://hatil.com/sites/default/files/Android%20sign.png"/></a>

                            </Col>
                        </Row>

                    </Container>
                    <Container fluid={true} className='pt-3 pb-1 bg-dark'>
                        <Container>
                            <Row className='px-0'>
                                <h6 className='text-white'>WE DELIVER IN</h6>
                                <p className='footer-text text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>


                            </Row>
                        </Container>

                    </Container>

                </div>

            </Fragment>
        );
    }
}

export default FooterDesktop;