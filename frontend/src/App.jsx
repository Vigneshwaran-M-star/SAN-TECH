import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Aboutpage from "./pages/Aboutpage";
import PythonCourse from "./pages/pythoncourse";
import SqlCourse from "./pages/Sqlcourse";

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/python" element={<PythonCourse />} />
        <Route path="/sql" element={<SqlCourse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
