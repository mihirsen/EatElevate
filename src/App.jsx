import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Website/Navbar";
import "./Style.css";
import HomePage from "./components/Website/HomePage";
import Profile from "./components/OwnerProfile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomePage />
      </div>
    </BrowserRouter>
  );
}
export default App;
