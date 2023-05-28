import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    // <Image className ="rounded-full" height ="30" width= "30" alt = "avatar" src ="/images/placeholder.jpg" />
    <>
      {!!user && (
        <div className="mr-1 ml-1 font-semibold flex items-center justify-center gap-3">
          <img
            className="rounded-full"
            height="30"
            width="30"
            src="./placeholder.jpg"
            alt="avatar"
          />
          <div>{user.user.name}</div>
        </div>
      )}
    </>
  );
};

export default Avatar;
