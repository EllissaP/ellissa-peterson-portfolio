import { ListGroup } from "react-bootstrap";

function Box3() {
  return (
    <>
      <div className="box3">
        <p className="box3-title">
          Contact Info
        </p>
        <ListGroup className="info-box-list" variant="flush">
          <ListGroup.Item className="info-box-list-item">
            <i className="material-symbols-outlined">mail</i>
            ellissa.peterson@gmail.com
          </ListGroup.Item>
          <ListGroup.Item className="info-box-list-item">
            <i className="material-symbols-outlined">call</i>
            515-720-1611
          </ListGroup.Item>
          <ListGroup.Item className="info-box-list-item">
            <i className="material-symbols-outlined">link</i>
            <a href="https://www.linkedin.com/in/ellissa-peterson">linkedin.com/in/ellissa-peterson</a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Box3;