import React, { useState } from 'react';
import FakeData from '../../fakeData/FakeData';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Main.css';


const Main = () => {

    const first15 = FakeData.slice(0, 15);


    const [user, setUser] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAdd = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);

    }
    
    
    return (
        <div className = "d-flex justify-content-around">
            <div className='course-container' >
                {
                    user.map( course => <Course handleAdd = {handleAdd}  key={course.id}    course = {course} ></Course>)
                }
            </div>
            <div className='cart-container' >
                <Cart first15 = {first15} cart = {cart} ></Cart>

            </div>
        </div>
    );
};

export default Main;