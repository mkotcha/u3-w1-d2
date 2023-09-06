import { Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";
let category = null;

const AllTheBooks = props => {
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
      category = [...fantasy, ...history, ...horror, ...romance, ...scifi];
      break;
  }

  return (
    <Container>
      <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {category.map((book, index) => (
          <SingleBook book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
