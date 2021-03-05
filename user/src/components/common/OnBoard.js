import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Card, Button, Form} from "react-bootstrap";

class OnBoard extends Component {
    render() {
        return (
          <Fragment>
              <Container className='TopSection' >
                  <Row className='p-2'>
                      <Col lg={6} md={6} sm={6} xs={6} className='shadow-sm mt-2 bg-white'>
                          <Form className='onBoardForm'>
                              <h4 className='section-title text-center'>USER SING IN</h4>
                              <h6 className="section-sub-title text-center">Please Enter Your Mobile No, And Go Next</h6>
                              <input className="form-control m-2" type="text" placeholder="Mobile Number"/>
                              <Button className="btn btn-block m-2 mt-3 site-btn">Next</Button>

                          </Form>

                      </Col>
                      <Col className=' p-0 m-0 'lg={6} md={6} sm={6} xs={6}>
                          <img className='onBoardBanner' src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1a.H.PRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"/>
                      </Col>

                  </Row>

              </Container>

          </Fragment>
        );
    }
}

export default OnBoard;