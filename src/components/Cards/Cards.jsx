import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = ({countCourse}) => {
    const[cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>
            {
                cards.map(card=><Card card={card} countCourse={countCourse}></Card>)
            }
        </div>
    );
};

export default Cards;