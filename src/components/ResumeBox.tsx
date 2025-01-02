import { Button, ButtonGroup } from "react-bootstrap";
import documentPdf from '../../public/EllissaPetersonResume.pdf';

function ResumeBox() {
  return (
    <>
      <div className="resume-box">
      <ButtonGroup vertical className="resume-box-text">
        <Button href={documentPdf} className="resume-box-list-item">My Resume (PDF)</Button>
        <Button href="https://github.com/EllissaP" className="resume-box-list-item">GitHub (personal)</Button>
        <Button href="https://github.com/EllissaPeterson" className="resume-box-list-item">GitHub (college)</Button>
      </ButtonGroup>
      </div>
    </>
  );
}

export default ResumeBox;