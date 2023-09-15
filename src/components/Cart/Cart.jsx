import "./Cart.css"
const Cart = ({coursename,creditHr,hourRemaining,courseCost}) => {
    return (
        <div className="cartContainer">
            <p className="hrRemaining">Credit Hour Remaining {hourRemaining} hr</p>
            <hr />
            <h2>Course Name</h2>
            <ol>
                <span></span>
            {   
                coursename.map(card=><li key={card.courseTitle}>
                    {card.courseTitle}
                </li>
                )
            }
            </ol>
            <hr />
            <p>Total Credit Hour : {creditHr}</p>
            <hr />
            <p>Total Price : {courseCost} USD</p>
        </div>
    );
};

export default Cart;