import React from 'react'
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
        <div className="not">
            <div className="number">
            ERR : 404 </div>
            <div className="content">Oops! Something went wrong :( </div>
            <div className="display-1 page">Page Not Found</div>
            <div className="back">
            <NavLink to="/"><button className="btn btn-primary my-4">Go Back</button></NavLink>
            </div>
        </div>
        </>
    );
}

export default NotFound;
