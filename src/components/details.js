import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Products from "./myData/products"
import close from "./images/close.png"
import "./css/details.css"

import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context";


export default function Details(){
    const{cart, setCart} = useContext(cartContext)


    const {id} = useParams();
    const [item, setItem] = useState({})
    useEffect(()=>{
        const newItem = Products.find((prod)=>{
            return prod.id === Number(id)
        })
        setItem(newItem)
    },[])


    const {title, img, price, desc} = item

    return(
        <div className="detail_container">

                <Link to="/cart" className="cart_link"><FaShoppingCart className="cart_logo_d"/><span className="cart_span">{cart.length}</span></Link>

                <section className="details_sect">
                    <Link to="/shop" className="close"><img src={close} alt=""/></Link>
                   

                    <main className="detail_main">
                        <div className="myDetails">
                    
                            <img src={img} alt={title} className="detail_img"/>
                    

                            <div className="details">
                                <h2>{title}</h2>
                                <h5>${price}</h5>

               {
                    cart.includes(item)? 
                    <button className="addremove" onClick={
                        ()=>{
                            setCart(cart.filter((prod)=>{
                                return prod.id !== item.id
                            }))
                        }
                    }>Remove from Cart</button> :
                    <button className="addremove" onClick={
                        ()=> {
                            setCart([...cart, item])
                        }
                    }>Add to Cart</button>
                }

                                <h4>Available in Stock</h4>
                            </div>
                        </div>

                        <p className="paragraph">{desc}</p>
                    </main>
                </section>
        </div>
    )
}