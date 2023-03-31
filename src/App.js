import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
