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
        src="placeholder.jpg"
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
