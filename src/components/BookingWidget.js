import React, { useContext, useEffect, useState } from 'react';
import { differenceInDays } from 'date-fns';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
// import Spinner from './Spinner';
 
const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInDays(new Date(checkOut), new Date(checkIn));
  }

  const handleBooking = async () => {
    if(user=== null) {
        return <Navigate to ={"/"}/>
    }
    const response = await axios.post('https://homestay-app-server.azurewebsites.net/bookings', {
      checkIn,
      checkOut,
      noOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
      perks: place.perks,
    });
    

    const bookingId = response.data._id;

    setRedirect(`/account/bookings/${bookingId}`);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-rose-100 shadow p-4 rounded-2xl">
      <div className="text-xl text-center">
        Price: ₹{place.price} / per night
      </div>
      <div className="text-xl text-center">
        Available facilities: {place.perks}
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check In: </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className='appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl'
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out: </label>
            <input
            className='appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl'
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-2 px-4 border-t flex flex-row gap-2  ">
          <label >Number of guests: </label>
          <input
          className='appearance-none block w-auto bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl'
            type="number"
            max={8}
            min={1}
            value={noOfGuests}
            onChange={(e) => setNoOfGuests(e.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="pb-2 px-4 border-t grid grid-cols-2 ">
          <div>
          <label>Your full name: </label>
            <input
            className='appearance-none block  bg-white text-gray-700 border border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
          <label>Phone number: </label>
            <input
            className='appearance-none block  bg-white text-gray-700 border border-red-500 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl'
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
           
           
          </div>
        )}
      </div>
      <button onClick={()=>handleBooking} className="rounded-full bg-red-400 text-white h-full py-3 px-4 ml-3 mb-3">
        Book this place
        {numberOfNights > 0 && <span> for ₹{numberOfNights * place.price}</span>}
      </button>
    </div>
  );
};

export default BookingWidget;