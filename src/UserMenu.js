import React, { useCallback, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItems from "./MenuItems";
import useRegisterModel from "./hooks/useRegisterModel";
import useLoginModel from "./hooks/useLoginModel";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserMenu = ({ user }) => {
  const switchRouteIfLoggedIn = useCallback(() => {
    navigate("/account");
  }, [user]);

  // const navigate =useNavigate()
  const navigate = useNavigate();
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();
  const [isOpen, setIsOpen] = useState(false);
  const toggleUser = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".menu")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  function logoutUser() {
    if (user) {
      setUser(null);
      localStorage.clear();
      toast.success("Logged out successfully");
      navigate("/");
      toggleUser();
    }
  }
  return (
    <div className="relative menu">
      <div className="flex flex-row item-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={toggleUser}
        >
          <Avatar user={user} />
          {!user && (
            <div className="flex items-center mr-6">
              <AiOutlineMenu />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            
            w-[15vw]
            md: w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            "
        >
          <div className="flex flex-col cursor-pointer mx-2">
            {user ? (
              <>
                <MenuItems onclick={switchRouteIfLoggedIn} label="My profile" />
                <MenuItems
                  onclick={() => {
                    navigate("/account/accommodation");
                  }}
                  label="My accommodation"
                />
                <MenuItems
                  onclick={() => {
                    navigate("/account/bookings");
                  }}
                  label="My bookings"
                />
                {/* <MenuItems onclick={() => {}} label="HomeStay my home " /> */}
                <hr />
                <MenuItems onclick={logoutUser} label="Logout" />
              </>
            ) : (
              <>
                <MenuItems onclick={loginModel.onOpen} label="Login" />
                <MenuItems onclick={registerModel.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
