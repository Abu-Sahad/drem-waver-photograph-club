import React, { useEffect, useState } from 'react';
import Pakage from '../Pakage/Pakage';
import './pakages.css'

const Pakages = () => {
    const [pakages, setPakages] = useState([]);

    useEffect(() => {
        fetch('pakages.json')
            .then(res => res.json())
            .then(data => setPakages(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Pakages</h1>
                <div className="pakages-container">
                    {
                        pakages.map(pakage => <Pakage
                            key={pakage.id}
                            pakage={pakage}
                        ></Pakage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pakages;