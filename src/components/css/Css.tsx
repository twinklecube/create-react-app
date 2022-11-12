import React from 'react';
import "./style.css";
import classes from './style.module.css';
import "./scssStyle.scss";
import scssStyles from './scssStyle.module.scss'

const Css = () => {
    return (
        <>
            <div className="css-wrapper">
                CSS
            </div>
            <div className={classes.cssTitle}>
                CSS TITLE
            </div>
            <div className="scss-title">scss title</div>
            <div className={scssStyles.sassWrapper}>scss wrapper</div>
        </>
    );
};

export default Css;