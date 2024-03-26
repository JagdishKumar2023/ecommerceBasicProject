import "./App.css";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import DataDisplay from "./DataDisplay/DataDisplay";
// import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <AllRoutes />
      <Navbar />
      <DataDisplay />
    </div>
  );
}

export default App;
