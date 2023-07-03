import Header from "./header";
import "./css/home.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "./productCard";
import Myreview from "./myReviews";
import Footer from "./footer";
import products from "./myData/products"

const Trending = products.slice(3, 9)


export default function Home(){
    const[trending, setTrending] = useState(Trending)
    return(
        <section className="container">
            <div className="header_container">
                <Header/>
                <div className="banner">
                    <span className="writeup">
                        <h1>Think Shoes, Think STEPZ</h1>
                        <p>Shoe Love is True Love</p>
                    </span>
                    <div className="home_btn">
                        <Link to="/about"><button className="learn_btn">Learn More</button></Link>
                        <Link to="/shop"><button className="shop_btn">Shop</button></Link>
                    </div>
                </div>
            </div>

            <div className="mydiv">
                <div className="divtitle">
                   <h1>Trending</h1>
                   <span className="underline"></span>
                </div>
                <div className="trending_prod">
                    {
                        trending.map((product)=>{
                            return <ProductCard prod={product} key={product.id}/>
                        })
                    }
                </div>
            </div>

            <div className="mydiv">
               <div className="divtitle">
                   <h1>About Us</h1>
                   <span className="underline"></span>
                </div>

                <div className="about_text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo</p>
                </div>
            </div>

            <div className="mydiv">
               <div className="divtitle">
                   <h1>Our Reviews</h1>
                   <span className="underline"></span>
                </div>

                <Myreview/>
            </div>

            <Footer/>

        </section>
    )
}