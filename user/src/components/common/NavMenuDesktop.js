import React, {Component ,Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";

class NavMenuDesktop extends Component {



        constructor(){
            super();
            this.state={
                SearchKey:'',
                SerchReDirectStatus:false
            }
            this.OnSearchHandelar=this.OnSearchHandelar.bind(this)
            this.SearchOnClick=this.SearchOnClick.bind(this)
            this.SerchRedirect=this.SerchRedirect.bind(this)
        }

        OnSearchHandelar(event){
            let SearchKey=event.target.value
            this.setState({SearchKey:SearchKey})
           
        }

        SearchOnClick(){
           
            if(this.state.SearchKey.length>=2){
                this.setState({SerchReDirectStatus:true})
            }
        }

        SerchRedirect(){
            if(this.state.SerchReDirectStatus===true){
                return <Redirect to={'/ProductListBySearch/'+this.state.SearchKey}/>
            }

        }


    render() {
        return (
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <Row>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <a href="" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a>
                        <Link to='/cart' className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                    </Col>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <div className="input-group w-100">
                            <input onChange={this.OnSearchHandelar} type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                            <button onClick={this.SearchOnClick}  type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                        </div>
                    </Col>
                    <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                        <Link to='favourite' className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger iconColor">4</span></sup></Link>
                        <Link to='/notifaction' className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger iconColor">4</span></sup></Link>
                        <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                        <Link to= '/onboard' className="h4 btn">LOGIN</Link>
                    </Col>
                </Row>
                {this.SerchRedirect()}
            </Container>
        );
    }
}

export default NavMenuDesktop;