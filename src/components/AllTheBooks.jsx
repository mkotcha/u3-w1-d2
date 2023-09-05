import { Card, Col, Container, Row, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {fantasy.map(book => (
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-auto">{book.title}</Card.Title>
                <Button variant="success">buy</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">category: {book.category}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
