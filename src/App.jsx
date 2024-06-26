import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss"
import "./styles/colors.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaqueries.scss"


import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services.jsx"
function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
     
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
    <Footer />

  </Router>
  );
}

export default App;
