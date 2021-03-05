import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Card, Button, Form} from "react-bootstrap";

class OnBoard extends Component {
    render() {
        return (
          <Fragment>
              <Container className='TopSection' >
                  <Row className='p-2'>
                      <Col lg={12} md='12' sm={12} xs={12} className='shadow-sm mt-2 bg-white'>
                          <Form className='onBoardForm'>
                              <h4 className='section-title'>USER SING IN</h4>
                              <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                              <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                              <Button className="btn btn-block m-2 site-btn">Next</Button>

                          </Form>

                      </Col>

                  </Row>














                  <Row className='d-flex justify-content-center'>
                      <Col className='BetweenTwoSection' md={6} lg={6} sm={8} xs={12}>
                          <Card >

                              <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Form>
                                      <Form.Group controlId="formBasicEmail">
                                          <Form.Label>Moblile Number</Form.Label>
                                          <Form.Control type="Text" placeholder="Enter Your Phone Number" />

                                      </Form.Group>

                                  </Form>
                                  <Button variant="primary">Next</Button>
                              </Card.Body>
                          </Card>

                      </Col>
                  </Row>
              </Container>

          </Fragment>
        );
    }
}

export default OnBoard;