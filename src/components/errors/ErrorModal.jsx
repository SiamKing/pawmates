import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ErrorModal extends Component {

    render() {
        return (
            <>
                <Modal centered show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.closeModal}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ErrorModal;