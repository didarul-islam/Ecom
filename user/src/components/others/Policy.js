import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Policy extends Component {
    render() {
        return (
            <Fragment>
                <Container className='TopSection' >
                    <Row className='p-2 d-flex justify-content-center'>
                        <Col lg={10} md={10} sm={12} xs={12} className='card mt-4'>
                            <div className='card-body'>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <p>It is a long established fact that a reader will be distracted b y the readable content of a page when looking at its layout.</p>

                            </div>
                        </Col>

                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default Policy;