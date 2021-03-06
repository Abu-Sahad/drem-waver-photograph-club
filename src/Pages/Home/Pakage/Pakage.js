import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pakage.css'

const Pakage = ({ pakage }) => {
    const { id, name, img, discription, price } = pakage;
    const navigate = useNavigate();

    const navigateToPakageDetail = id => {
        navigate(`/pakage/${id}`);
    }
    return (
        <div className='pakage'>
            <img className='pakage-img' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{discription}</small></p>
            <button onClick={() => navigateToPakageDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Pakage;