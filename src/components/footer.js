import "./css/footer.css"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

export default function Footer(){
    return(
        <footer>
            <div className="footer_top">
                <div className="footer_address">
                   <h3 className="footer_logo">STEPZ</h3>
                   <h4>20, Koya Street, Olamojuba <br/> Kilo Bus-Stop, Surulere <br/> Lagos.</h4>
                   <span className="social_icons">
                      <FaFacebook className="facebook"/>
                      <FaInstagram className="instagram"/>
                      <FaTwitter className="twitter"/>
                   </span>
                </div>

                <div className="footer_store">
                    <h3>Our Store</h3>
                    <div className="footer_nav">
                        <p>About us</p>
                        <p>FAQ</p>
                        <p>Offices</p>
                    </div>
                </div>

                <div className="footer_terms">
                    <h3>Terms and Conditions</h3>
                    <div className="footer_nav">
                        <p>Store Policy</p>
                        <p>Shipping and returns</p>
                        <p>Payment methods</p>
                    </div>
                </div>
            </div>
            <div className="footer_btm">
                <p>
                    &copy;Copyright {new Date().getFullYear()}. All rights reserved. Designed by Kenneth. <br/> Powered by Codeprof Academy
                </p>
            </div>
        </footer>
    )
}