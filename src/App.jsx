import "./App.css";
import Card from "./components/card/Card";
import Bannar from "./components/navbar/bannar/Bannar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default App;
