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
import Contact from "../components/common/Contact";

class ContactPage extends Component {


        componentDidMount(){
            window.scroll(0,0)
        }


    render() {
        return (
           <Fragment>
               <div className='Desktop'>
                   <NavMenuDesktop/>

               </div>

               <div className='Mobile'>
                   <NavMenuMobile/>
               </div>

                 <Contact/>

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

export default ContactPage;