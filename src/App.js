import "./App.css";
import Navbar from "./Navbar/Navbar";
import Caurasal from "./components/Caurasal";
import AllRoutes from "./AllRoutes";
// import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <AllRoutes />
      <Navbar />
      <Caurasal />
    </div>
  );
}

export default App;
