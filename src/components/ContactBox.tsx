import { ListGroup } from "react-bootstrap";

function ContactBox() {
  return (
    <>
      <div className="contact-box">
        <p className="contact-box-title">
          Contact Info
        </p>
        <ListGroup className="contact-box-list" variant="flush">
          <ListGroup.Item className="contact-box-list-item">
            <i className="material-symbols-outlined">mail</i>
            ellissa.peterson@gmail.com
          </ListGroup.Item>
          <ListGroup.Item className="contact-box-list-item">
            <i className="material-symbols-outlined">call</i>
            515-720-1611
          </ListGroup.Item>
          <ListGroup.Item className="contact-box-list-item">
            <i className="material-symbols-outlined">link</i>
            <a href="https://www.linkedin.com/in/ellissa-peterson">linkedin.com/in/ellissa-peterson</a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default ContactBox;