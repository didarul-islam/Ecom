import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";

class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container className='TopSection p-0  overflow-hidden' fluid={true}>
                    <Row className='overflow-hidden p-0 m-0'>

                        <Col className='p-0 m-0 overflow-hidden' lg={12} md={12} sm={12}>
                            <SliderHome/>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTopMobile;