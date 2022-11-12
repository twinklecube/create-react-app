import React from 'react';
import "./style.css";
import classes from './style.module.css';

const Css = () => {
    return (
        <>
            <div className="css-wrapper">
                CSS
            </div>
            <div className={classes.cssTitle}>
                CSS TITLE
            </div>
        </>
    );
};

export default Css;