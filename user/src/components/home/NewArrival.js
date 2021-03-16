import React, {Component ,Fragment} from 'react';
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import NewArrivalPlaceHolder from "../placeholder/NewArrivalPlaceHolder";
import {Link} from "react-router-dom";

class NewArrival extends Component {


    constructor() {
        super();
        this.state={
            ProductData:[],
            isLoading:'',
            MainDiv:'d-none'
        }
        this.next=this.next.bind(this)
        this.prev=this.prev.bind(this)
    }


    componentDidMount() {

        axios.get(ApiURL.ProductListByRemark("NEW")).then(response=> {
            this.setState({ProductData:response.data,isLoading:'d-none',MainDiv:''})

        }).catch(error=> {



        });
    }






    next(){
        this.slider.slickNext()
    }
    prev(){
        this.slider.slickPrev()
    }





    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const MyList=this.state.ProductData
        const MyView=MyList.map((ProductList,i)=>{


            if(ProductList.special_price=='NA'){
                return  <div className="p-1">
                    <Link to={"productDetails/"+ProductList.product_code}>
                        <Card className="card   text-center w-100  image-box ">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{ProductList.title }</h5>
                                <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>

            }else {
                return <div className="p-1">
                    <Link to={"productDetails/"+ProductList.product_code}>
                        <Card className="card  text-center w-100  image-box ">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{ProductList.title }</h5>
                                <p className="product-price-on-card">
                                    Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>

            }





        })
        return (

            <Fragment>
                <NewArrivalPlaceHolder isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <Container fluid={true} className='text-center img_Card BetweenTwoSection'>
                        <h4 className="section-title px-3 mx-3">NEW ARRIVAL
                            <a onClick={this.prev} className='btn btn-sm site-btn ml-2'>
                                <i className='fa fa-angle-left'></i>
                            </a>
                            <a onClick={this.next} className='btn btn-sm site-btn ml-2'>
                                <i className='fa fa-angle-right'></i>
                            </a>


                        </h4>
                        <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                        <Slider ref={c=>(this.slider=c)} {...settings}>
                            {MyView}
                        </Slider>

                    </Container>

                </div>
            </Fragment>

        );
    }
}

export default NewArrival;