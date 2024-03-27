import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import Searchbar from "./components/Searchbar";
// import DataDisplay from "./DataDisplay/DataDisplay";
// import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <AllRoutes />
    </div>
  );
}

export default App;
