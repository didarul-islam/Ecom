import React, { Component,Fragment } from 'react'
import { Container,Row, Col,Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Cartist extends Component {
    render() {
        return (
            <Fragment>
                <Container className='TopSection pb-5 bg-white shadow-sm text-center' >
                    <Row bg-light p-2 text-center>
                        <Col lg={12} xl={12} md={12} sx={12} sm={12}>
                        <h5 className='p-0 m-0'>PRODUCT CART LIST</h5>
                        <h6>TOTAL PRICE 3000TK || TOTAL ITEM 04</h6>
                        <Link to ='order' className='btn m-1 site-btn'><i className='fa fa-shoping-cart'></i>Checkout Now</Link>
                        </Col>
                    </Row>
                    <Row className="p-2">
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                        <Col className='p-1' key={1} lg={3} xl={3} md={3} sx={6} sm={4} >
                            <Card className='cart-card w-100 image-box'>
                            <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>

                            <Card.Body>
                            <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card m-0 p-0">Total Price: 3000TK</p>
                            </Card.Body>
                            <div className="input-group m-0 p-0 w-100">
                                    <Button className="btn text-danger w-50 btn-light"><i className="fa fa-trash-alt"></i> </Button>
                                    <input placeholder="5" className="form-control w-50 text-center" type="number" />
                                </div>

                            </Card>
                        </Col>
                    </Row>

                </Container>
                
            </Fragment>
        )
    }
}
