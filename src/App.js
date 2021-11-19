import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;