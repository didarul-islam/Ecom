import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Policy from "../components/others/Policy";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";

class ProductDetailsPage extends Component {

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

                <div className='BetweenTwoSection'>
                    <ProductDetails/>
                    <SuggestedProducts/>
                </div>


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

export default ProductDetailsPage;
