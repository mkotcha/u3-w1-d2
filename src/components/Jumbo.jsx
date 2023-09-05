import { Container, Button } from "react-bootstrap";

const Jumbo = () => {
  return (
    <Container>
      <div className="p-5 my-4 bg-body-tertiary rounded-3">
        <Container fluid className="py-5">
          <h1 className="display-5 fw-bold">CBook Store</h1>
          <p className="col-md-8 fs-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam error blanditiis ea tempore saepe iusto
            itaque quos!
          </p>
          <Button variant="primary" size="lg">
            Buy
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default Jumbo;
