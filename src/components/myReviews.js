import reviewData from "./myData/review"
import { useState,useEffect } from "react"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import "./css/myReview.css"


export default function Myreview(){
    const [people, setPeople] = useState(reviewData)
    const [value, setValue] = useState(0)

    useEffect(()=>{
        let lastIndex = people.length-1
        if(value < 0){
            setValue(lastIndex)
        }

        if(value > lastIndex){
            setValue(0)
        }
    },[value, people])

    useEffect(()=>{
        let myInterval = setInterval(()=>{
            setValue(value + 1)
        },8000)

        return(()=>{
            clearInterval(myInterval)
        })
    },[value])

    return(
        <div className="slider_div">
            {people.map((person, index)=>{
                const {id, image, name, title, quote} = person
                let position = 'leftSlide'
                if(value === index){
                    position = 'activeSlide'
                }

                if(index === value-1 || (value === 0 && index === people.length-1)){
                    position = 'lastSlide'
                }

                return(
                    <article key={id} className={position}>
                        <img src={image} alt={name} />
                        <h4 className="review_name">{name}</h4>
                        <h5 className="review_add">{title}</h5>
                        <p className="review_text">{quote}</p>
                    </article>
                )
            })}

            <button onClick={()=> setValue(value - 1)}><FiChevronLeft/></button>
            <button onClick={()=> setValue(value + 1)}><FiChevronRight/></button>
        </div>
    )
}