import React, { useState, useEffect } from 'react'
import { ButtonComponent } from '../index'
import Modal from 'react-bootstrap/Modal';

export const ModalComponent = (props) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.body}
            </Modal.Body>
            <Modal.Footer>
                <ButtonComponent onClick={props.onHide} text="Close" />
            </Modal.Footer>
        </Modal>
    );
}
