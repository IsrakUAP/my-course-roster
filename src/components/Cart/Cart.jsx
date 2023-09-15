
const Cart = ({coursename,creditHr,hourRemaining,courseCost}) => {
    return (
        <div>
            <p>Credit Hour Remaining {hourRemaining} hr</p>
            <h2>Course Name</h2>
            <ol>
            {
                coursename.map(card=><li key={card.courseTitle}>
                    {card.courseTitle}
                </li>
                )
            }
            </ol>
            <p>Total Credit Hour : {creditHr}</p>
            <p>Total Price : {courseCost} USD</p>
        </div>
    );
};

export default Cart;