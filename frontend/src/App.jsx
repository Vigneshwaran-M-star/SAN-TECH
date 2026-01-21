import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Aboutpage from "./pages/Aboutpage";
import PythonCourse from "./pages/pythoncourse";
import SqlCourse from "./pages/Sqlcourse";
import DjangoCourse from "./pages/Djangocourse";
import HtmlcssCourse from "./pages/Htmlcsscourse";
import JsCourse from "./pages/Jscourse";
import DatasCourse from "./pages/Datascourse";
import PyfullCourse from "./pages/Pyfullcourse";
import DataaCourse from "./pages/Dataacourse";
import Homehero from "./pages/Homehero";


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/python" element={<PythonCourse />} />
        <Route path="/sql" element={<SqlCourse />} />
        <Route path="/django" element={<DjangoCourse />} />
        <Route path="/htmlcss" element={<HtmlcssCourse />} />
        <Route path="/js" element={<JsCourse />} />
        <Route path="/dataa" element={<DataaCourse />} />
        <Route path="/datas" element={<DatasCourse />} />
        <Route path="/pyfull" element={<PyfullCourse />} />
        <Route path="/" element={<Homehero />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
