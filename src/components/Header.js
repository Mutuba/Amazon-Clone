import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <div>
      <header>

        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
          {/* mt=margin-top sm:flex-frow-0 means no growing on small screen  */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              // keep image aspect ratio
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

           
          {/* Search */}
          {/* mobile first meaning hide on small screen else flex
          Use flex-grow (flex-grow=1) to allow a flex item to grow to fill any available space: 
          Use flex-shrink to allow a flex item to shrink if needed:*/}
          <div className="hidden sm:flex flex-grow bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md cursor-pointer">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
            />
            <SearchIcon className="h-12 p-4" />
          </div>

          {/* Right */}

          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap cursor-pointer">
            <div className="link">
              <p>Hello Mutuba</p>
              <p className="font-extrabold md:text-sm">Accounts & Lists</p>
            </div>

            <div className="link">
              <p>Returns</p>

              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div className="relative flex items-center link">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold">
                {" "}
                0
              </span>

              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
                Basket
              </p>
            </div>
          </div>
        </div>


        {/* Bottom Nav */}

        <div className="flex items-center  space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-xs">
          <p className="flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>

          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="hidden lg:inline-flex link">Electronics</p>
          <p className="hidden lg:inline-flex link">Food & Grocery</p>
          <p className="hidden lg:inline-flex link">Prime</p>
          <p className="hidden lg:inline-flex link">Buy Again</p>
          <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
          <p className="hidden lg:inline-flex link">Health & Personal Care</p>
        </div>
        <div />
      </header>
    </div>
  );
};

export default Header;
