import { Component } from "react";
import AllTheBooks from "./AllTheBooks";
import Jumbo from "./Jumbo";

class AllTheBooksClass extends Component {
  state = {
    category: "scifi",
  };

  render() {
    return (
      <>
        <Jumbo classIstance={this} />
        <AllTheBooks category={this.state.category} />
      </>
    );
  }
}

export default AllTheBooksClass;
