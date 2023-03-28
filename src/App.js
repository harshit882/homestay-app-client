import './App.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from './Footer'
function App() {
  return (
    <div className="App">
    <Router>
    <Header/> 
   <Routes>
    <Route path='search' element= {<SearchPage/>}/>
         
         
    <Route path='/' element= {<Home/>}/>
   
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
