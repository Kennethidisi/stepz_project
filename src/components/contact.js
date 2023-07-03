import Footer from "./footer";
import Header from "./header";
import "./css/contact.css"


export default function Contact(){
    return(
        <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>Contact Us</h1>
                </div>
            </div>

            <div className="contact_div">
                <div className="contact_left">
                    <h2 className="contact_us">Contact Us</h2>

                    <p className="addr">20, Koya Street, Olamojuba <br/> Kilo Bus-Stop, Surulere <br/> Lagos.</p>

                    <div className="inquire">
                        <h5>General inquiries: <span>+234 9037 918 492</span></h5>
                        <h5>Delivery inquiries: <span>+234 9037 918 492</span></h5>
                    </div>
                </div>

                <div className="contact_right">
                    <h2>Send Message</h2>
                    <p>Send us a message and we will reply as soon as we can!</p>
                    <form>
                        <input type="text" placeholder="Enter your name"/>
                        <input type="email" placeholder="Enter your email"/>
                        <textarea cols="30" rows="5" placeholder="Enter your message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </section>
    )
}