import React from 'react';
import Paypal from "../src/assets/PayPal.png";
import Microsoft from "../src/assets/microsoft.png";

import Helon from "../src/assets/helon.png";
import Three from "../src/assets/Mastercard logo.png";

import Alcone from "../src/assets/Alcone.png"
import Luk from "../src/assets/luk.png"

import Pepsi from "../src/assets/Pepsi.png"

export default function Logos() {
  return (
    <div className="container  " id='container-logo'>
      <div className="row" >
        <div className="logos-heading">
          <h2 data-scroll data-scroll-speed="5" className='text-center'>Our Clients </h2>
        </div>
      </div>
      <div className="row text-center px-1 pt-2 mx-5 px-8" id='logo-imgaes' >
        <div data-scroll data-scroll-speed="2" className="col-6 col-sm-4 gap-5 col-md-3  col-lg-2 col-2 mb-3" style={{width:'250px',marginTop:'50px'}}>
          <img src={Paypal} alt="Paypal" className="img-fluid" />
        </div>
        <div data-scroll data-scroll-speed="2" className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4"  style={{width:'170px', marginTop:'40px'}}>
          <img src={Microsoft} alt="Microsoft" className="img-fluid" />
        </div>
        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4" style={{width:'120px'}}>
          <img src={Mars} alt="Mars" className="img-fluid" />
        </div> */}
          <div data-scroll data-scroll-speed="2" className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-2" style={{width:'140px',marginTop:'18px'}}>
          <img src={Pepsi} alt="Three" className="img-fluid" />
        </div>
        <div data-scroll data-scroll-speed="2" className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4 mt-2" style={{width:'120px'}}>
          <img src={Helon} alt="Helon" className="img-fluid" />
        </div>
        <div data-scroll data-scroll-speed="2" className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-2" style={{width:'170px',marginTop:'50px'}}>
          <img src={Three} alt="Three" className="img-fluid" />
        </div>

        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" style={{width:'170px'}}>
          <img src={One} alt="Paypal" className="img-fluid" />
        </div> */}
        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4" style={{width:'170px'}}>
          <img src={Alcone} alt="Microsoft" className="img-fluid" />
        </div> */}
        <div  data-scroll data-scroll-speed="2" className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4" style={{width:'170px',marginTop:'40px'}}>
          <img src={Luk} alt="Mars" className="img-fluid" />
        </div>
        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-2 mb-3 pt-4 mt-2" style={{width:'170px'}}>
          <img src={Sumsung} alt="Helon" className="img-fluid" />
        </div> */}
      
        
      </div>
    </div>
  );
}
