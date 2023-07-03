import { NavLink, Link } from "react-router-dom";
import "./css/header.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { cartContext } from "../context";
import menu from "./images/menu.png"
import close from "./images/icons/icons8_multiply_96px_1.png"


export default function Header(){
    const {cart} = useContext(cartContext)

    const[showNav, setShowNav] = useState(false)

    const activeLink = ({isActive})=>{
        return {
            borderBottom: isActive? "3px solid  #FE6A27" : "none" ,
            padding: "5px 0px", 
        }
    }
    
    return(
        <header>
            <h3 className="logo">STEPZ</h3>
            <div className="nav_div">
                <nav className={showNav? "shownav" : "hidenav"}>
                    <NavLink to="/" style={activeLink}>Home</NavLink>
                    <NavLink to="/about" style={activeLink}>About Us</NavLink>
                    <NavLink to="/shop" style={activeLink}>Shop</NavLink>
                    <NavLink to="/faq" style={activeLink}>FAQ</NavLink>
                    <NavLink to="/contact" style={activeLink}>Contact Us</NavLink>
                </nav>
                <Link to="/cart" className="cart_link"><FaShoppingCart className="cart_logo"/><span className="cart_span">{cart.length}</span></Link>

                <img src={showNav? close : menu} alt="menu" width={30} className="menu" onClick={()=> setShowNav(!showNav)}/>
            </div>
        </header>
    )
}