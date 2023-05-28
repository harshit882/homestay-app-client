import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    // <Image className ="rounded-full" height ="30" width= "30" alt = "avatar" src ="/images/placeholder.jpg" />
    <>
      <img
        className="rounded-full inline "
        height="30"
        width="30"
        src={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
}
      />

      {!!user && (
        <span className="mr-1 ml-1 font-semibold">
          {/* <img className ="rounded-full" height ="30" width= "30" src="./placeholder.jpg" alt="avatar" /> */}
          {user.user.name}
        </span>
      )}
    </>
  );
};

export default Avatar;
