import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "./Container";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
function Header() {
  const { user } = useContext(UserContext);

  // console.log(user)
  return (
    <div className="header fixed w-full bg-white z-10 shadow-sm ">
      <Link to="/">
        <img
          src="https://dynamic.brandcrowd.com/asset/logo/f26fbab6-d2ac-4944-bc94-09ddf7cde5a2/logo-search-grid-1x?v=636989397566000000&text=Home+stays"
          alt="HomeStay"
          className="header__icon hidden md:block cursor-pointer"
        />
      </Link>
      <div className="py-4 border-b-[1px]">
        {/* <Container anything/> */}
        <Container>
          <div className="flex flex-col item-center justify-center gap-3 md:gap-0">
            {/* <SearchInput /> */}
            <div className="text-4xl text-green-600 italic font-serif font-extrabold">
              Homestays
            </div>
            <p className="px-7 text-sm text-gray-500">Uncover hidden gems.</p>
          </div>
        </Container>
      </div>
      <UserMenu user={user} />
      {/* Hi lol */}
    </div>
  );
}

export default Header;
