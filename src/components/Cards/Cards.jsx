import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css"


const Cards = ({countCourse}) => {
    const[cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="cardsContainer">
            {
                cards.map(card=><Card card={card} key={card.courseTitle} countCourse={countCourse}></Card>)
            }
        </div>
    );
};

export default Cards;