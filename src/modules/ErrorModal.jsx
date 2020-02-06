import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'




const ErrorModal = ({ showModal, closeModal, error }) => {
    const ERRORS = [
        {
            title: "Sorry, no pawmates were found in your search.",
            description: "Please change your search criteria (maybe try expanding the distance)."
        },
        {
            title: "Whoops! Something went wrong!",
            description: "Please try your search again."
        }
    ]

        const ERROR = ERRORS[error]
        const { title, description } = ERROR
        return (
            <>
                <Modal centered show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={closeModal}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
}

export default ErrorModal;