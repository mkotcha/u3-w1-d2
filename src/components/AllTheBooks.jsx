import { Card, Col, Container, Row, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
let category = null;

const AllTheBooks = props => {
  console.log("props ", props);
  switch (props.category) {
    case "fantasy":
      category = fantasy;
      break;
    case "history":
      category = history;
      break;
    case "horror":
      category = horror;
      break;
    case "romance":
      category = romance;
      break;
    case "scifi":
      category = scifi;
      break;

    default:
      break;
  }
  return (
    <Container>
      <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {category.map((book, index) => (
          <Col key={book.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-auto">{book.title}</Card.Title>
                <Card.Text className="d-flex mt-2">
                  <span className="me-auto">price: </span> <span>€ {book.price} </span>
                </Card.Text>
                <Button variant="success">
                  add to cart <i className="bi bi-cart-plus"></i>
                </Button>
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
