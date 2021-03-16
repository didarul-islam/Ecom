import React, {Component,Fragment} from 'react';
import {Col, Container,Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
import {toast} from "react-toastify";
import SliderLoading from "../placeholder/SliderLoading";

class HomeTop extends Component {

    constructor() {
        super();
        this.state={
            MenuData:[],
            SliderData:[],
            isLoading:'TopSection',
            MainDiv:'d-none'
        }
    }

    componentDidMount() {

        axios.get(ApiURL.SendCategoryDetails).then(response=> {
            this.setState({MenuData:response.data})

        }).catch(error=> {



        });

        //sliderinfo

        axios.get(ApiURL.SendSliderInfo).then(response=> {
            this.setState({SliderData:response.data,isLoading:'d-none',MainDiv:''})

        }).catch(error=> {



        });
    }




    render() {
        return (
            <Fragment>

                <SliderLoading isLoading={this.state.isLoading}/>


                <div className={this.state.MainDiv}>
                    <Container className='TopSection p-0  overflow-hidden' fluid={true}>
                        <Row className='overflow-hidden p-0 m-0'>
                            <Col className='p-0 m-0 overflow-hidden' lg={3} md={3} sm={12}>
                                <MegaMenu data={this.state.MenuData}/>

                            </Col>
                            <Col className='p-0 m-0 overflow-hidden' lg={9} md={9} sm={12}>
                                <SliderHome data={this.state.SliderData} />

                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default HomeTop;