import "./App.css";
import Navbar from "./Navbar/Navbar";
import Caurasal from "./components/Caurasal";
import { slides } from "./data/carusaldata.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Caurasal data={slides} />
    </div>
  );
}

export default App;
