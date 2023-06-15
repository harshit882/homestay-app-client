import axios from "axios";
import React, { useEffect, useState } from "react";
// import AccountNav from "../components/AccountNav";
import PlaceImg from "../components/PlaceImg";
import { format, differenceInCalendarDays } from "date-fns";
import { Link } from "react-router-dom";
import BookingDates from "../components/BookingDates";
import { toast } from "react-hot-toast";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const getBookings = async () => {
      const dataKey = JSON.parse(localStorage.getItem("dataKey"));
      const token = dataKey.token;
      const { data } = await axios.get(
        "https://homestay-app-server.cyclic.app/bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBookings(data);
    };
    getBookings();
  }, []);

  const handelDeleteBookedPlace = async (id) => {
    const dataKey = JSON.parse(localStorage.getItem("dataKey"));
    const token = dataKey.token;
    console.log(id);
    const response = await axios.delete(
      `https://homestay-app-server.cyclic.app/bookings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      toast.success("Booking successfully cancelled");
      setBookings(bookings.filter((booking) => booking._id !== id));
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div className="relative" id={booking._id}>
              <Link
                to={`/account/bookings/${booking._id}`}
                className="flex gap-4 ml-4 mr-4 mb-4 bg-gray-200 rounded-2xl overflow-hidden my-2 relative hover:bg-gray-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              >
                <div className="w-48 ">
                  <PlaceImg place={booking.place} />
                </div>
                <div className="py-3 pr-3 grow ">
                  <h2 className="text-xl">{booking.place.title}</h2>
                  <div className="text-xl">
                    <div className="flex gap-2 border-t "></div>
                    <div className="text-xl">
                      <BookingDates
                        booking={booking}
                        className="items-center mb-2 mt-4  text-gray-600"
                      />

                      <div className="flex gap-1 items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                        <span className="text-2xl">
                          Total price: ₹{booking.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <button
                className="absolute bottom-6 bg-red-400 text-white px-4 py-2 rounded-md right-10 hover:bg-red-500 flex flex-row gap-1 items-center justify-center"
                onClick={() => handelDeleteBookedPlace(booking._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Cancel Reservation
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
