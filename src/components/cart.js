import { cartContext } from "../context";
import Header from "./header";
import { useContext, useEffect, useState } from "react";
import "./css/cart.css"
import ProductCard from "./productCard";
import Footer from "./footer";


export default function Cart(){
    const {cart} = useContext(cartContext)
    const [total, setTotal] = useState()

    useEffect(()=>{
        setTotal(
            cart.reduce((total, item)=>{
                return total + Number(item.price)
            },0)
        )
    },[cart])

    if(cart.length === 0){
        return(
            <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>My Cart</h1>
                </div>
            </div>

            <div className="cart_div_empty">
                <h1 className="no_cart">Your cart is currently empty</h1>
            </div>

            <Footer/>
        </section>
        )

    }
    return(
        <section className="container">
            <div className="header_container_all">
                <Header/>  
                <div className="banner_all">
                   <h1>My Cart</h1>
                   <p>${total}</p>
                </div>
            </div>

            <div className="cart_div">
                {
                    cart.map((item)=>{
                        return <ProductCard key={item.id} prod={item}/>
                    })
                }
            </div>

            <Footer/>
        </section>
    )
}