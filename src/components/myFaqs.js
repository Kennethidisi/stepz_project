import up from "./images/icons/up.png"
import down from "./images/icons/down.png"
import { useState } from "react"

export default function MyFaq(props){
    const[showFaq, setShowFaq] = useState(false)
    return(
        <div className="faq_div">
            <span>
                <h4>{props.question}</h4>
                <img src={showFaq? up : down} alt="" className="arrow" onClick={()=> setShowFaq(!showFaq)}/>
            </span>

            {showFaq &&  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>}
        </div>
    )
}