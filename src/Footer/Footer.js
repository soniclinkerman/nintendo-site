import React from "react";
import esrb from "./images/esrb_images.png";
import "./footer.css";

const Footer = () => {
    return(
        <div class="footer">
            <div class="container">
                <div className="footer_contact">
                    <a className="footer_link" href="#">Contact Us</a>
                    <br/>
                    <a className="footer_link" href="#">Website Feedback</a>
                </div>
     

                <div class="social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-youtube-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>

                <img src={esrb} className="esrb_img" />

                <p className="footer-text">© 2019 Nintendo.</p>
                <p className="footer-text">Games are property of their respective owners.</p>
                <p className="footer-text">Nintendo of America Inc. Headquarters are in Redmond, Washington</p>



            </div>
           


        </div>

    )
}

export default Footer