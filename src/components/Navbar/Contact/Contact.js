import React from 'react';
import "./Contact.css";
import port from '../../../assets/image1.png';

const Contact = () => {
  return (
    <div>
        <h1 className="contacthead">Contact Us</h1>
        <a href={port} download="resumedm.png"><button className="contactbtn">Download my resume</button></a>
        <div class="follow-us-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="follow-us-section-heading">Follow Us</h1>
          </div>
          <div class="col-12">
            <div class="d-flex flex-row justify-content-center">
              <div class="follow-us-icon-container">
                <a href='mailto:danamdinesh11@gmail.com'><i class="fa-regular fa-envelope icon"></i></a> 
              </div>
              <div class="follow-us-icon-container">
                <a href=""><i class="fab fa-instagram icon"></i></a>
              </div>
              <div class="follow-us-icon-container">
                <a href=""><i class="fab fa-facebook icon"></i></a>
              </div>
              <div class="follow-us-icon-container">
              <a href=""><i class="fa-brands fa-linkedin icon"></i></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact