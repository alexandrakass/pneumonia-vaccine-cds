  
import React from 'react'
import ReactDom from 'react-dom'
import { Button } from '@material-ui/core';
import './Modal.css';


// Popup window styling
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '200px',
  zIndex: 1000
}

// Popup window styling
const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}



export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        

        <div >
            <Button className = 'close-btn' variant="contained" color="secondary" size = "small" onClick={onClose}>X</Button>
        </div>
        {children}

        <div className = "inline-btns" >
              <Button 
              className = "yes-btn"
              variant="contained" 
              color="primary" 
              size = "small" 
              onClick={onClose}>Yes
              </Button>

              <Button 
              variant="contained" 
              color="primary" 
              size = "small" 
              onClick={onClose}>No
              </Button>
        </div>



      
      </div>
    </>,
    document.getElementById('portal')
  )
}