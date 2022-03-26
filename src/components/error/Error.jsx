import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import cryingFace from '../../images/cry.jpg';

const Error = ({ message, hasButton }) => {
    return (
        <div className="error">
            <h1>{message}</h1>
            <img src={cryingFace} className="error-img" alt="cryingFace" />
            {hasButton &&
                <Link to={'/'}>
                    <button className="btn btn-primary">Ver productos</button>
                </Link>
            }
        </div>
    )
}

export default Error;
