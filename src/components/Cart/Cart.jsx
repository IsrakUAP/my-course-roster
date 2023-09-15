
const Cart = ({coursename,creditHr,hourRemaining}) => {
    const limitedCreditHr = Math.min(creditHr, 20);
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
            <p>Total Credit Hour : {limitedCreditHr}</p>
        </div>
    );
};

export default Cart;