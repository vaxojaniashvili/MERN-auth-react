import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full bg-gray-900 flex justify-between py-5 px-5">
      <div className="text-white">Not logged in</div>
      <div className="flex text-white gap-5 px-5">
        <Link to="sign-in">
          <div>Sign-in</div>
        </Link>
        <Link to="sign-up">
          <div>sign-up</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
