import React, {Component ,Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";
import {Link} from "react-router-dom";

class NavMenuMobile extends Component {


    constructor() {
        super();
        this.state={
            sideNavState:"sideNavClose",
            contentOverlayState:"contentOverlayClose"
        }
    }

    MenuBarClickHandeler=()=>{
        this.OpenCloseHandelar()
    }

    ContentOverlayClickHandeler=()=>{
        this.OpenCloseHandelar()

    }
    OpenCloseHandelar=()=>{
        let sideNavState=this.state.sideNavState
        let contentOverlayState=this.state.contentOverlayState
        if(sideNavState==='sideNavOpen'){
            this.setState({sideNavState: 'sideNavClose',contentOverlayState: 'contentOverlayClose'})
        }else {
            this.setState({sideNavState: 'sideNavOpen',contentOverlayState: 'contentOverlayOpen'})
        }

    }


    render() {
        return (
            <Fragment>
                <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <a onClick={this.MenuBarClickHandeler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                    <a href="" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a>
                    <Link to='/cart' className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>

                    <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                    <Link to="/notifaction" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                    <Link className="btn"><i className="fa h4 fa-search"></i>  </Link>

                </Navbar>

                <div  className={this.state.sideNavState}>
                    <Link to="/" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></Link>
                    <hr/>
                   <MegaMenuMobile/>
                </div>
                    <div onClick={this.ContentOverlayClickHandeler} className={this.state.contentOverlayState}>

                    </div>


            </Fragment>

        );
    }
}

export default NavMenuMobile;