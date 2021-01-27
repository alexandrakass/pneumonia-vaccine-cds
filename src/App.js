import React, { useState } from 'react'
import Modal from './Modal'
import { Button } from '@material-ui/core';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  top: 400,
  right: 0,
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  top: 410,
  zIndex: 2,
  backgroundColor: 'orange',
  padding: '25px',
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <Button variant="contained" color="primary" onClick={() => setIsOpen(true)}>OPEN Pneumonia Vaccine CDS</Button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Question
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>This is a clincial decision support system based on CDC guidelines for the administration of pneumonia vaccines for adults over the age of 65. This CDS is mainly for primary care clinicians. </div>
    </>
  )
}