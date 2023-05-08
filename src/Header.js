import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Container from "./Container";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
function Header() {
  function currentUser() {
    return null;
  }
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
          <div className="flex flex-row item-center justify-between gap-3 md:gap-0">
            <SearchInput />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      Hi lol
    </div>
  );
}

export default Header;
