import ProductCard from "./productCard";
import Header from "./header";
import products from "./myData/products"
import "./css/shop.css"
import Footer from "./footer";
import { useState } from "react";

const myCategories = ['all', ...new Set(products.map((prod)=> prod.cat))]

export default function Shop(){
    const [myProducts, setMyProducts] = useState(products)

    function filterItems(cat){

        if(cat === 'all'){
            setMyProducts(products)
            return;
        }
       const filteredProd = products.filter((prod)=>{
            return prod.cat === cat
        })
        setMyProducts(filteredProd)
    }
    return(
        <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>Our Shop</h1>
                </div>
            </div>

            <section className="shop_section">
            <div className="cat_btn">
                {
                    myCategories.map((cat, index)=> 
                       <button key={index} onClick={()=> filterItems(cat)}>{cat}</button>
                    )
                }
            </div>

            <div className="myProducts">
                {myProducts.map((product)=>{
                    return <ProductCard prod={product} key={product.id}/>
                })}
            </div>

            </section>
            <Footer/>
        </section>
    )
}