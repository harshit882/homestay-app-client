import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import PlacesForm from "./PlacesForm";
import PlacesPage from "./PlacesPage";
const PlacesAccomdation = () => {
  // variables to manage state of a form

  const [redirectToAccommodation, setRedirectToAccommodation] = useState(false);

  const { action } = useParams();

  return (
    <>
      {action !== "new" && (
        <>
          <PlacesPage />
          <div className="my-4  text-center">
            <Link
              className="inline-flex bg-red-400 text-white rounded-full px-6 py-2 "
              to={"/account/accommodation/new"}
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new place
            </Link>
          </div>
        </>
      )}
      {action === "new" && <PlacesForm />}
    </>
  );
};

export default PlacesAccomdation;
