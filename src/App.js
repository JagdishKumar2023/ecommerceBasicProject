import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./AllRoutes";
// import DataDisplay from "./DataDisplay/DataDisplay";
import Searchbar from "./Pages/Searchbar";
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
