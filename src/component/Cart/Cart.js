import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import FakeData from '../../fakeData/FakeData';

const Cart = (props) => {
    const cart = props.cart;


    const total = cart.reduce ((total, price) => total + price.price ,0)
    console.log(cart);
    return (
        <div>
            <h1>Order Summary</h1> <br></br>
             <br></br>
            <h2>Ordered Courses : {cart.length}</h2> <hr></hr>
            <h3>Course Name - Price</h3> <br/> <br></br>
            {
                cart.map((course) => <SingleProduct course = {course} ></SingleProduct>  )
            }

            <h1>Total Price : ${total} </h1>
        </div>
    );
};

export default Cart;