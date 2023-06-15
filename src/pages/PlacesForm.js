import React, { useState } from "react";
import Perks from "../Perks";
// import Perks from "../Perks";
import axios from "axios";
import Image from "../components/Image";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const PlacesForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [MaxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(false);
  const [redirectto, setRedirectTo] = useState(false);

  async function addPhotoByInputLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post(
      "https://homestay-app-server.cyclic.app/upload-by-link",
      { link: photoLink }
    );
    setAddedPhotos((previous) => {
      return [...previous, filename];
    });
    setPhotoLink("");
  }

  async function uploadByLaptop(e) {
    const files = e.target.files;
    // console.log({ files });
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    const response = await axios.post(
      "https://homestay-app-server.cyclic.app/upload",
      data,
      {
        headers: { "Content-type": "multipart/form-data" },
      }
    );

    if (response.status === 200) {
      toast.success("Image uploaded successfully");
      const filenames = response?.data;
      setAddedPhotos((prev) => {
        return [...prev, ...filenames];
      });
    } else {
      toast.error("Something went wrong");
    }
  }

  const removePhoto = (filename) => {
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    setAddedPhotos([
      filename,
      ...addedPhotos.filter((photo) => photo !== filename),
    ]);
  };

  async function addNewPlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      photoLink,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      MaxGuests,
      price,
    };
    // setRedirect('/account/accommodation')
    // setRedirectToAccommodation(true)
    const dataKey = JSON.parse(localStorage.getItem("dataKey"));
    const token = dataKey.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const response = await axios.post(
      `https://homestay-app-server.cyclic.app/places/add-places`,
      placeData,
      config
    );

    if (response.status === 200) {
      toast.success("Add new place successfully");
    } else {
      toast.error("Add new place failed");
    }
    setRedirectTo(true);
  }
  if (redirectto) {
    return <Navigate to={"/account/accommodation"} />;
  }
  return (
    <div>
      <form
        className="w-full max-w-lg m-auto bg-gray-200 py-6 px-10 rounded-md"
        onSubmit={addNewPlace}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>

            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title, for example : My lovelu apt"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full  bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Photo
            </label>

            <p className="text-gray-600 text-xs italic">more = better</p>
            <div className="flex gap-2">
              <input
                type="text"
                className="appearance-none block bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white flex-grow"
                placeholder={"Add using a link ....jpg"}
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
              <button
                onClick={addPhotoByInputLink}
                className="bg-red-400 text-white rounded-md h-full py-3 px-4 mb-3"
              >
                Add photo
              </button>
            </div>
            <div className="mt-2 grid gap-2  md:grid-cols-4 lg:grid-cols-3 ">
              {addedPhotos?.length > 0 &&
                addedPhotos.map((link) => (
                  <div className="h-32 flex relative" key={link}>
                    <img
                      className="rounded-2xl w-full object-cover"
                      src={link}
                      alt=""
                    />
                    <button
                      onClick={() => removePhoto(link)}
                      className="absolute cursor-pointer bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-70"
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
                    </button>
                    <button
                      onClick={(e) => selectAsMainPhoto(e, link)}
                      className="absolute cursor-pointer bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-70"
                    >
                      {link === addedPhotos[0] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}

                      {link !== addedPhotos[0] && (
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
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                ))}

              <label className=" cursor-pointer border bg-white rounded-2xl text-xl p-4 items-center flex gap-1">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={uploadByLaptop}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8    h-8 mt-0.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </label>
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0 -mx-3 mt-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Description
                {/* <p className="text-light">tell more about your place</p> */}
              </label>

              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rouded-md"
                id="grid-first-name"
                type="text"
                placeholder="tell more about your place"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols={60}
                rows={5}
              />
            </div>

            <Perks selected={perks} onchange={setPerks} />
            <div className="w-full  px-3 mb-6 md:mb-0 -mx-3 mt-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Extra Info
                {/* <p className="text-light">tell more about your place</p> */}
              </label>

              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-md"
                id="grid-first-name"
                type="text"
                placeholder="for eg. house rules and regulations"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
                cols={60}
                rows={2}
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0 -mx-3 mt-6">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Check in&out time
              </label>
              <p className="text-cyan-600 font-serif font-thin">
                add check in&out time ,remember to have some time window for
                room cleaning
              </p>
              <div className="grid sm:grid-cols-3 mt-2 gap-2">
                <div className="-mb-1">
                  <p className=" font-serif font-thin">Check in time</p>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl"
                    id="grid-first-name"
                    type="text"
                    placeholder="eg. 12:00 pm"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="-mb-1">
                  <p className=" font-serif font-thin">Check out time</p>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl"
                    id="grid-first-name"
                    type="text"
                    placeholder="eg. 11:00 am"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
                <div className="-mb-1">
                  <p className=" font-serif font-thin">Max guests</p>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-2xl"
                    id="grid-first-name "
                    type="number"
                    max={4}
                    min={1}
                    value={MaxGuests}
                    onChange={(e) => setMaxGuests(e.target.value)}
                  />
                </div>
                <div className="w-full flex-grow">
                  <h3 className="mt-2 mb-1 w-full">Price per night</h3>
                  <input
                    className="w-full"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={addNewPlace}
          className="w-full rounded-full bg-red-400 text-white h-full py-3 px-4 mb-3"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PlacesForm;
