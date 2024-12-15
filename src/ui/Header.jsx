import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { useState } from "react";
import HeaderModal from "./HeaderModal";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-8 grid-rows-2 md:grid-rows-1  w-full py-4 gap-y-4 border-b-2 ">
      <div className="flex items-center gap-x-2  col-span-4">
        <RxHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-100 w-7 h-7 p-1 rounded-lg block md:hidden cursor-pointer"
        />
        <HeaderModal open={isOpen} onClose={() => setIsOpen(false)} title="">
          <HeaderMenu className="flex flex-col"  />
        </HeaderModal>
        <span className="text-primary-900 text-sm md:text-xl md:font-bold">
          گیاه لند
        </span>
        <HeaderMenu className="md:flex items-center gap-x-2 hidden text-xs lg:text-sm" />
      </div>

      <form className="relative  row-start-2 col-span-4 md:col-span-2 md:row-span-1 md:row-start-1 md:col-start-5">
        <input
          type="text"
          className="bg-primary-100 textField__input"
          placeholder="جستجو..."
        />
        <button className="absolute left-0 top-0 flex items-center h-full ml-3">
          <IoSearchSharp />
        </button>
      </form>

      <div className="flex items-center gap-x-2 col-start-8 flex-row-reverse">
        <Button className="flex  items-center justify-between w-auto ">
          <span>
            <IoIosLogIn />
          </span>
        </Button>
        <Button>
          <IoCartOutline />
        </Button>
      </div>
    </div>
  );
}

export default Header;
