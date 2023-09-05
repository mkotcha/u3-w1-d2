import { Component } from "react";
import { Button } from "react-bootstrap";
import AllTheBooks from "./AllTheBooks";
import Jumbo from "./Jumbo";

class AllTheBooksClass extends Component {
  state = {
    category: "scifi",
  };

  render() {
    return (
      <>
        <Jumbo cls={this} />

        <AllTheBooks category={this.state.category} />
      </>
    );
  }
}
export default AllTheBooksClass;
