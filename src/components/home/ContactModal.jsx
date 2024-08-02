import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export const ContactModal = ({form, sendEmail, show, handleClose, handleSubmit}) => {

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Your email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    autoFocus
                    as="textarea" rows={1}
                    style={{ resize: 'none', overflow: 'auto' }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  
                >
                  <Form.Label>Send me a message</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message"/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-dark" onClick={handleClose}>
                Close
              </Button>
              <Button className="btn-dark" onClick={handleSubmit}>
                Send message
              </Button>
        </Modal.Footer>
      </Modal>
  )
}
