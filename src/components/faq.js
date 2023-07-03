import Header from "./header";
import MyFaq from "./myFaqs";
import "../components/css/faq.css"
import Footer from "./footer"


export default function FAQ(){
    return(
        <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>Frequently Asked <br/> Questions</h1>
                </div>
            </div>

            <div className="faqs">
                <div className="faq_article">
                    <span className="faq_title">
                       <h2>Delivery</h2>
                       <small className="faq_underline"></small>
                    </span>
                    <div className="my_faq_div">
                    <MyFaq question={'What is the delivery charge?'}/>
                    <MyFaq question={'What is the cut-off time to get my order delivered tomorrow?'}/>
                    <MyFaq question={'Do you offer same day delivery?'}/>
                    <MyFaq question={'Can I find out at what time my order will be delivered?'}/>
                    </div>
                </div>

                <div className="faq_article">
                    <span className="faq_title">
                       <h2>Orders</h2>
                       <small className="faq_underline"></small>
                    </span>
                    <div className="my_faq_div">
                    <MyFaq question={'Is there a minimum order?'}/>
                    <MyFaq question={'When will my order be confirmed and my card charged?'}/>
                    <MyFaq question={"Can I change or cancel my order before it's despatched?"}/>
                    <MyFaq question={'Do you give a discount for large orders?'}/>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
    )
}