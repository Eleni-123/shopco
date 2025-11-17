import React from "react";
import DropdownMenuCheckboxes from "./DropDownMenu";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const CategoriesBar = () => {
  return (
    <header>
      <nav className="w-full">
        <div className="flex w-[1240px] w-full justify-evenly space-x-1 justify-center items-center">
          <div className="logo font-bold text-3xl cursor-pointer ">SHOP.CO</div>
          <ul className=" flex justify-evenly space-x-4">
            <li className="cursor-pointer">
              Shop <DropdownMenuCheckboxes />
            </li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals </li>
            <li className="cursor-pointer">Brands</li>
          </ul>
          <div className="SearchBar bg-gray-200  flex items-center px-4 py-2 justify-evenly">
            <Search />{" "}
            <input
              type="text"
              onChange={
                (val) => console.log(val.target.value)
                // fetch("http://localhost:5000/api/products?name=" + val.target.value)
                // .then((res) => res.json())
                // .then((data) => console.log(data))
              }
              placeholder="Search for products..."
              className="bg-transparent outline-none text-gray-700 "
            />
          </div>
          <div className="flex space-x-2">
            <button className="cursor-pointer">
              <ShoppingCart />
            </button>
            <button className="cursor-pointer">
              <CircleUserRound />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CategoriesBar;
