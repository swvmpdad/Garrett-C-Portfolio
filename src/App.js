import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
        <Header />
          <div className="flex-column justify-flex-start min-100-vh">
              <div className="container">
                  <Routes>
                      <Route
                          path='/about'
                          element={<About />}
                      />
                      <Route
                          path='/portfolio'
                          element={<Portfolio />}
                      />
                      <Route
                          path='/contact'
                          element={<Contact />}
                      />
                      <Route
                          path='*'
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
