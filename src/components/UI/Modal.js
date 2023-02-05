import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
    return <div className={classes.backdrop} />
}

const OverLay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, portalElement)}
            {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, portalElement)}
        </Fragment>
    )
}

export default Modal