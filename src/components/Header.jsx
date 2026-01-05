import React from "react";
import Logo from "../assets/sj_kitchen_kart_logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-between items-center p-4 mx-2">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-20 h-auto rounded-full" />
        </div>

        <div className="flex items-center gap-6 font-semibold">
          <button className="px-4 py-2 rounded hover:bg-gray-100 transition">
            Sign in
          </button>
          <div>0️⃣ Cart</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
