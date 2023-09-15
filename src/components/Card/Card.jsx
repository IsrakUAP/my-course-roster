import "./Card.css"

const Card = ({card,countCourse}) => {
    const {courseImg,courseTitle,courseDescription,courseFeeIcon,courseFee,courseIcon,courseCredit} = card;
    console.log(card);
    return (
        <div  className="cardContainer">
        <div className="cardItems">
            <img className="cardImg" src={courseImg} alt="" />
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
            <div className="iconContainer">
                <img src={courseFeeIcon} alt="" /><span>Price: {courseFee}</span> <img src={courseIcon} alt="" /><span>Credit: {courseCredit} </span>
            </div>
            <button className="cardBtn" onClick={()=>countCourse(card)} >Select</button>
        </div>
        </div>
    );
};

export default Card;