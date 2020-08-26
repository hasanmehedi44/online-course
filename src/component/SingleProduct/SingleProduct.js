import React from 'react';
import FakeData from '../../fakeData/FakeData';

const SingleProduct = (props) => {

    
    console.log(props.course)
    return (
        <div>
            <h3>{props.course.name} - ${props.course.price}</h3> <hr/>
        </div>
    );
};

export default SingleProduct;