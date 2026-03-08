import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou"; // new component

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Tools />
              <Projects />
              <Contact />
            </>
          }
        />

        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;