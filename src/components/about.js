import Footer from "./footer";
import Header from "./header";
import "./css/about.css"


export default function About(){
    return(
        <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>About Us</h1>
                </div>
            </div>

            <div className="about_div">
                <div className="found_in">
                    <h2>Established in 2020</h2>
                </div>
                <div className="paragraphs">
                    <h3>Stepz is currently a leading global retailer and authorized reseller of luxury products, we provide the ultimate customer experience; by offering our customers the ability to craft and express their individual styles. Our sales executives are also well trained and equipped to deliver top-notch customer service.</h3>

                    <p>Nulla hendrerit metus et tincidunt tristique. Fusce molestie commodo mauris, vitae vestibulum tortor venenatis non. Pellentesque quis urna a magna bibendum volutpat a at nisl. Suspendisse finibus, tortor id gravida feugiat, nulla leo venenatis nisi, et aliquam quam ligula eget dui. Suspendisse lectus lorem, varius vel dapibus a, vestibulum a eros. Sed sed magna in neque commodo pretium.</p>
                    
                    <span className="founder">
                        <p>We look forward to your stay.</p>
                        <h3>Kenneth & Evelyn</h3>
                    </span>
                </div>
            </div>

            <Footer/>
        </section>
    )
}