import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Bloglists from '../components/Blog/Bloglists'
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Bloglist = () => {
    return(
        <div className="body_wrapper">
            {/*<CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>*/}
            <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" 
            Ptitle="Learn" Pdescription="Better traffic, for less than half the cost."/>
            <Bloglists/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}
export default Bloglist;
