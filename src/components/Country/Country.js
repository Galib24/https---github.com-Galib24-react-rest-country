import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const {area,region,population,name,flags} = props.country;
    return (
        <div className='country'>
             <h2> country Name: {name.common} </h2>
             <img src={flags.png} alt="" />
             <p>population: {population}</p>
             <p><small>Area: {area}</small></p>
             <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;