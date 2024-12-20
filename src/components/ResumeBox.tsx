import documentPdf from '../../public/PetersonResume.pdf';
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function EducationBox() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="education-box">
        <div className="education-box-text">
          <a href={documentPdf} target="_blank">Checkout My Resume (PDF)</a>
          {/* <iframe src={documentPdf}>Checkout My Resume</iframe> */}
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </div>
    </>
  );
}

export default EducationBox;