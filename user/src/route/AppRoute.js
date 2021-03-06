import React, {Component ,Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage  from "../pages/HomePage";
import UserOnBoardPage from "../pages/UserOnBoardPage";
import ContactPage from '../pages/ContactPage'
import PolicyPage from '../pages/PolicyPage'
import RefundPage from '../pages/RefundPage'
import PurchasePage from '../pages/PurchasePage'
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";

class AppRoute extends Component {
    render() {
        return (


            <Fragment>
                <Switch>

                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/onboard' component={UserOnBoardPage}></Route>
                    <Route exact path='/contact' component={ContactPage}></Route>
                    <Route exact path='/policy' component={PolicyPage}></Route>
                    <Route exact path='/refund' component={RefundPage}></Route>
                    <Route exact path='/purchase' component={PurchasePage}></Route>
                    <Route exact path='/about' component={AboutPage}></Route>
                    <Route exact path='/productDetails' component={ProductDetailsPage}></Route>
                    <Route exact path='/notifaction' component={NotificationPage}></Route>

                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;