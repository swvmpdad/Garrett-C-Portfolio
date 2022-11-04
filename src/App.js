import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Routes, Route } from "react-router-dom";
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
                          path='/Garrett-C-Portfolio/about'
                          element={<About />}
                      />
                      <Route
                          path='/Garrett-C-Portfolio/portfolio'
                          element={<Portfolio />}
                      />
                      <Route
                          path='/Garrett-C-Portfolio/contact'
                          element={<Contact />}
                      />
                      <Route
                          path='/Garrett-C-Portfolio/resume'
                          element={<ResumePage />}
                      />
                      <Route
                          path='/Garrett-C-Portfolio/*'
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
