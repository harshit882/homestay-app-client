import "./App.css";
import Home from "./Home";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from "./Footer";
import "./index.css";
import RegisterModel from "./RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./LoginModel";
// import { useContext } from 'react';
import { UserContextProvider } from "./context/UserContext";
import { PlaceProvider } from "./context/PlaceContext";
import Account from "./pages/Account";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/Bookings";
import BookingPage from "./pages/BookingPage";
function App() {
  // const location =useLocation()
  // console.log(location)
  return (
    <div className="App">
      <UserContextProvider>
        <PlaceProvider>
          <Router>
            <ToasterProvider />
            <RegisterModel />
            <LoginModel />
            <Header />
            <Routes>
              <Route path="/search" element={<SearchPage />} />

              <Route path="/" element={<Home />} />
              <Route path="/account/:subpage?" element={<Account />} />
              <Route path="/account/:subpage?/:action?" element={<Account />} />
              <Route path="/account/bookings/:id" element ={<PlacePage/>} />
              <Route path="/account/booking" element ={<BookingsPage/>} />
              <Route path="/account/bookings/:id" element ={<BookingPage/>} />
            </Routes>
            <Footer />
          </Router>
        </PlaceProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
