import React, {Component ,Fragment} from 'react';
import FeaturedProduct from "../components/home/FeaturedProduct";
import Categorys from "../components/home/Categorys";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <div className='Desktop'>
                    <NavMenuDesktop/>
                    <HomeTop/>
                 </div>

                <div className='Mobile'>
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                 </div>

                <NewArrival/>
                <FeaturedProduct/>
                <Collection/>
                <Categorys/>

                <div className='Desktop'>
                    <FooterDesktop/>
               </div>
                <div className='Mobile'>
                    <FooterMobile/>

                </div>

            </Fragment>
        );
    }
}

export default HomePage;