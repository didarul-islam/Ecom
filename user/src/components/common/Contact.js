import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Card, Button, Form} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
          <Fragment>
              <Container className='TopSection' >
                  <Row className='p-2'>
                      <Col lg={6} md={6} sm={6} xs={6} className='shadow-sm mt-2 bg-white'>
                          <Form className='onBoardForm'>
                              <h4 className='section-title text-center'>CONTACT WITH  US</h4>
                              <h6 className="section-sub-title text-center">Please Enter Your Mobile No, And Go Next</h6>
                              <Form.Group>
                                  <Form.Control type='text' placeholder='Your Name' />
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control type='text' placeholder='Your Mobile' />
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control type='text' placeholder='Message' />
                              </Form.Group>
                              <Form.Group>
                              <Button className="btn btn-block m-2 mt-3 site-btn">Send</Button>
                              </Form.Group>
                          </Form>

                      </Col>
                      <Col className='p-0 m-0 'lg={6} md={6} sm={6} xs={6}>

                      <iframe className='googleMap'

                      src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8339318426815!2d90.43269651429767!3d23.78892729322189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c04bd74f81%3A0x96a565223dddb8a!2sSatarkul%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1614970425476!5m2!1sen!2sbd">

                      </iframe>
                      </Col>

                  </Row>

              </Container>

          </Fragment>
        );
    }
}

export default Contact;