import React, {Component ,Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage  from "../pages/HomePage";
import UserOnBoardPage from "../pages/UserOnBoardPage";

class AppRoute extends Component {
    render() {
        return (

            <Fragment>
                    <Switch>

                        <Route exact path ='/' component={HomePage}></Route>
                        <Route exact path ='/onboard' component={UserOnBoardPage}></Route>
                    </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;