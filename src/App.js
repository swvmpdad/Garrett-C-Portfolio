import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ResumePage from './pages/Resume';

function App() {
  return (
    <>
        <Header />
          <div className="flex-column justify-flex-start min-100-vh">
              <div className="container">
                  <Routes>
                      <Route
                          path='/portfoliosis/about'
                          element={<About />}
                      />
                      <Route
                          path='/portfoliosis/portfolio'
                          element={<Portfolio />}
                      />
                      <Route
                          path='/portfoliosis/contact'
                          element={<Contact />}
                      />
                      <Route
                          path='/portfoliosis/resume'
                          element={<ResumePage />}
                      />
                      <Route
                          path='/portfoliosis/*'
                          element={<About />}
                      />
                  </Routes>
              </div>
          </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
