import React from 'react';
import './Loader.css';

const Loader = (props) => {
    if(props.loader === true){
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
}

export default Loader;