import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import Jumbo from "./components/Jumbo";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";

function App() {
  return (
    <>
      <MyNav />
      <Jumbo />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
