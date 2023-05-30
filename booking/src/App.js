import Footer from "./components/Footer";
import Header from "./components/Header";
import Home  from "./components/Home";
import SearchPage from "./components/SearchPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<SearchPage/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
