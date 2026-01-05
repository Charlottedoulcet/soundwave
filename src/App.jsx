import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Join from './pages/Join/Join';

const App = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/discover" element = {<Discover/>} />
      <Route path = "/join" element = {<Join/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
};  

export default App