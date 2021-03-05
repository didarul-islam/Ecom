import React, {Component ,Fragment} from 'react';
import Slider from "react-slick";
import {Card, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {


    constructor() {
        super();
        this.next=this.next.bind(this)
        this.prev=this.prev.bind(this)
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
        return (
            <Container fluid={true} className='text-center BetweenTwoSection'>
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
                 <div>
                     <Card className="p-1 card w-100 image-box">
                         <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                         <Card.Body>
                             <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                             <p className="product-price-on-card">Price: 3000TK</p>
                         </Card.Body>
                     </Card>
                 </div>
                 <div>
                     <Card className="p-1 card w-100 image-box">
                         <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                         <Card.Body>
                             <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                             <p className="product-price-on-card">Price: 3000TK</p>
                         </Card.Body>
                     </Card>
                 </div>
                 <div>
                     <Card className="p-1 card w-100 image-box">
                         <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                         <Card.Body>
                             <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                             <p className="product-price-on-card">Price: 3000TK</p>
                         </Card.Body>
                     </Card>
                 </div>
                 <div>
                     <Card className="p-1 card w-100 image-box">
                         <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                         <Card.Body>
                             <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                             <p className="product-price-on-card">Price: 3000TK</p>
                         </Card.Body>
                     </Card>
                 </div>
                 <div>
                     <Card className="p-1 card w-100 image-box">
                         <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                         <Card.Body>
                             <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                             <p className="product-price-on-card">Price: 3000TK</p>
                         </Card.Body>
                     </Card>
                 </div>

             </Slider>

         </Container>
        );
    }
}

export default NewArrival;