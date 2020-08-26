import React from 'react';
import './Course.css'


const Course = (props) => {
    const handleAdd = props.handleAdd;
    console.log(props)

    const {name, price } = props.course;
    return (
        <div>
          <div className='course'>
            <h1>{name}</h1>
            <h2><strong> Price: ${price}</strong> </h2>
            <button className="btn btn-primary" onClick={ () => handleAdd(props.course)} >Enroll Now</button>
          </div>    
        </div>

    );
};

export default Course;