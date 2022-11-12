import React from 'react';
import "./style.css";
import classes from './style.module.css';
import "./scssStyle.scss";
import scssStyles from './scssStyle.module.scss';
import './lessStyle.less';
import lessStyles from './lessStyle.module.less';
import olympiaParkImg from '../../../public/images/olympia-park-munich.jpg'

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
            <div className='less-title'>Less Title</div>
            <div className={lessStyles.lessWrapper}>less wrapper</div>
            <div className="less-image-wrapper">
                <img src={olympiaParkImg} />
            </div>
            <div className={scssStyles.scssImageWrapper}></div>
        </>
    );
};

export default Css;