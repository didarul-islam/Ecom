import React, {Component,Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NewArrival from "../components/home/NewArrival";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Collection from "../components/home/Collection";
import Categorys from "../components/home/Categorys";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import OnBoard from "../components/common/OnBoard";

class UserOnBoardPage extends Component {
    render() {
        return (
           <Fragment>
               <div className='Desktop'>
                   <NavMenuDesktop/>

               </div>

               <div className='Mobile'>
                   <NavMenuMobile/>
               </div>

                 <OnBoard/>

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

export default UserOnBoardPage;