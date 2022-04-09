import React from 'react';
import ReactDom from 'react-dom';
import classes from './Model.module.css'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModalOverlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalelement=document.getElementById('overlays')

const Model = (props) => {
  return <>
  { ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,portalelement)}
  { ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}

  </>;
};

export default Model;
