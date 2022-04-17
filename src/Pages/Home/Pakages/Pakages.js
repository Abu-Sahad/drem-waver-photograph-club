import React, { useEffect, useState } from 'react';
import Pakage from '../Pakage/Pakage';

const Pakages = () => {
    const [pakages, setPakages] = useState([]);

    useEffect(() => {
        fetch('../../../../public/pakages.json')
            .then(res => res.json())
            .then(data => setPakages(data));
    }, [])
    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Pakages</h1>
                <div className="services-container">
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