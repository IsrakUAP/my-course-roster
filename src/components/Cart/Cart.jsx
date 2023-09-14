
const Cart = ({coursename}) => {
    return (
        <div>
            <h1>length: {coursename.length}</h1>
            <h2>Course Name</h2>
            <ol>
            {
                coursename.map(card=><li key={card.courseTitle}>
                    {card.courseTitle}
                </li>
                )
            }
            </ol>
        </div>
    );
};

export default Cart;