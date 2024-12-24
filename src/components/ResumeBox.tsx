import { Button } from "react-bootstrap";
import documentPdf from '../../public/PetersonResume.pdf';

function ResumeBox() {
  return (
    <>
      <div className="resume-box">
        <div className="resume-box-text">
          <Button href={documentPdf}>Checkout My Resume (PDF)</Button>
        </div>
      </div>
    </>
  );
}

export default ResumeBox;