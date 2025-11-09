import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faBasketShopping,
//   faCircleUser,
//   faChevronDown,
// } from "@fortawesome/free-solid-svg-icons";
const CategoriesBar = () => {
  return (
    <header>
      <nav className="w-[1440px] ">
        <div className="flex w-[1240px] w-full justify-evenly space-x-1 justify-center items-center ">
          <div className="logo font-bold text-3xl">SHOP.CO</div>
          <ul className=" flex justify-evenly space-x-4">
            <li>{/* Shop <FontAwesomeIcon icon={faChevronDown} />{" "} */}</li>
            <li>On Sale </li>
            <li>New Arrivals </li>
            <li>Brands</li>
          </ul>
          <div className="SearchBar bg-gray-200  flex items-center px-4 py-2">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
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
          <div className="flex space-x-1">
            <button>{/* <FontAwesomeIcon icon={faBasketShopping} /> */}</button>
            <button>{/* <FontAwesomeIcon icon={faCircleUser} /> */}</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default CategoriesBar;
