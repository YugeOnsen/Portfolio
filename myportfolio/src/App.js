import './App.css';
import ContactPage from './compornents/ContactPage';
import Header from './compornents/Header';
import HomePage from './compornents/HomePage';
import TechPage from './compornents/TechPage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="App">
      <Header />

    <Routes>
      <Route path='/' element = {<HomePage />} />
      <Route path='/tech' element ={<TechPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>

  </div>
  </Router>
  );
}

export default App;
