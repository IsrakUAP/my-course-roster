

const Card = ({card,countCourse}) => {
    const {courseImg,courseTitle,courseDescription,courseFeeIcon,courseFee,courseIcon,courseCredit} = card;
    console.log(card);
    return (
        <div>
            <img src={courseImg} alt="" />
            <h3>{courseTitle}</h3>
            <p>{courseDescription}</p>
            <div>
                <img src={courseFeeIcon} alt="" /><span>Price: {courseFee}</span> <img src={courseIcon} alt="" /><span>Credit: {courseCredit} </span>
            </div>
            <button onClick={()=>countCourse(card)} >Select</button>
        </div>
    );
};

export default Card;