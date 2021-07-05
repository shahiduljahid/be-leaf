import React from 'react';

const Catagories = ({catagory}) => {
    return (
       <div className="col-md-3 text-center align-items-center mx-2 shadow p-3 mb-5">
           <img style={{height:'200px',width:'100%'}} src={catagory.img} alt="catagory" className="img-fluid d-block mb-3" />
           <button className="btn text-bold text-light btn-color">{catagory.btn}</button>
       </div>
    );
};

export default Catagories;
