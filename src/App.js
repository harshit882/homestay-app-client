import './App.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from './Footer'
import './index.css'
import RegisterModel from './RegisterModel';
import ToasterProvider from './providers/ToasterProvider';
import LoginModel from './LoginModel';
// import { useContext } from 'react';
import { UserContextProvider } from './context/UserContext';
function App() {
  return (
    <div className="App">
    <UserContextProvider>
    <Router>
    <ToasterProvider/>
    <RegisterModel/>
    <LoginModel/>
    <Header/> 
   <Routes>
    <Route path='search' element= {<SearchPage/>}/>
         
         
    <Route path='/' element= {<Home/>}/>
   
    </Routes>
    <Footer/>
    </Router>
    </UserContextProvider>
    </div>
   
  );
}

export default App;
