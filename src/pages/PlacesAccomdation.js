import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

const PlacesAccomdation = () => {
  // variables to manage state of a form
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

  const { action } = useParams();
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
    console.log({ files });
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    const { data: filenames } = await axios.post(
      "https://homestay-app-server.cyclic.app/upload",
      data,
      {
        headers: { "Content-type": "multipart/form-data" },
      }
    );

    setAddedPhotos((prev) => {
      return [...prev, ...filenames];
    });

    // .then((response) => {
    //   const { data: filenames } = response;
    //   setAddedPhotos((previous) => {
    //     return [...previous, ...filenames];
    //   });
    // console.log(data)
  }
  return (
    <>
      {action !== "new" && (
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
      )}
      {action === "new" && (
        <div>
          <form className="w-full max-w-lg m-auto bg-gray-200 py-6 px-10 rounded-md">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
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
                  for="grid-last-name"
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
                  for="grid-password"
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
                <div className=" grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 mt-2 ">
                  {addedPhotos.length > 0 &&
                    addedPhotos.map((link) => {
                      <div>
                        {/* {link} */}
                        <img className="rounded-2xl" src={""} alt="" />
                      </div>;
                    })}

                  <label className="w-2/6 cursor-pointer border bg-white rounded-2xl text-xl p-4 items-center flex gap-1">
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
                    for="grid-first-name"
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
                    for="grid-first-name"
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
                    for="grid-first-name"
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
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full rounded-full bg-red-400 text-white h-full py-3 px-4 mb-3">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PlacesAccomdation;
