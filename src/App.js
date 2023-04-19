import './App.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from './Footer'
import './index.css'
// import { useContext } from 'react';
// import { useGlobalContext } from './context';
function App() {
  // let data =useContext(AppContext)
  // let data = useGlobalContext()
  // console.log(data)
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
