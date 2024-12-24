import { Button, ButtonGroup } from "react-bootstrap";

function HackBox() {
  return (
    <>
      <div className="hack-box">
        <ButtonGroup vertical className="hack-box-text">
          <Button href="https://top.mlh.io/2020/profiles/ellissa-peterson" className="hack-box-list-item">MLH Top 50 (2020)</Button>
          <Button href="https://devpost.com/EllissaPeterson" className="hack-box-list-item">Devpost</Button>
          <Button href="/about-me" className="hack-box-list-item">More About Me</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default HackBox;