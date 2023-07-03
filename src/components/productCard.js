import { useContext } from "react"
import "./css/productCard.css"
import { cartContext } from "../context"
import { Link } from "react-router-dom"

export default function ProductCard({prod}){
    const{cart, setCart} = useContext(cartContext)
    const {img, title, price, id} = prod
     
    return(
        <div className="p_container">
            <img src={img} alt={title} />
            <span className="price_name">
                <h4>{title}</h4>
                <p>${price}</p>
            </span>
            <div className="btn_container">
                <Link to={`/item/${id}`}><button className="detail_btn">Details</button></Link>

                {
                    cart.includes(prod)? 
                    <button className="add_remove" onClick={
                        ()=>{
                            setCart(cart.filter((item)=>{
                                return item.id !== prod.id
                            }))
                        }
                    }>Remove from Cart</button> :
                    <button className="add_remove" onClick={
                        ()=> {
                            setCart([...cart, prod])
                        }
                    }>Add to Cart</button>
                }
            </div>
        </div>
    )
}