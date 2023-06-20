import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
 
  return (  
    <footer className="footer3">

         <div className="terms-section">
        <h3 class='AboutUs'>Terms and Conditions</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Fraud Protection</li>
          <li>Exchange and Refund Policy</li>
        </ul>
      </div>
      <div className="about-section">

        <h3 class='AboutUs'>About Us</h3>
        <p class='CPC'>Creativity, Positive Change & Self Expression. </p>
        <p class='learnmore' > <NavLink to="/helpinfo"> LearnMore </NavLink> </p>

      </div>
      
        
        <b className="subscribers">
          NewsLetter
        </b>  <p className="subscribers2">Sign up to stay updated about upcoming launches & offers! </p>


      <div class="subscribe">
        <p>SUBSCRIBE</p>
        <input placeholder="Your e-mail" class="subscribe-input" name="email" type="email"/>
        <br/>
        <div class="submit-btn">SUBMIT</div>
      </div>

    
    </footer>
    
    
  );
};

export default Footer;
