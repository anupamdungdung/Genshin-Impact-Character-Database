import React from 'react';
import loadinglogo from './assets/gielements.png'
import './LoadingScreen.scss'

const PreLoader = (props) => {
    return (
        <div className="logoContainer">
            
            <img className="loaderImage" src={loadinglogo}></img>    
        
                
        </div>
    )
}

export default PreLoader;