import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";

function Header() {
  return (
    <div className="grid grid-rows-2 md:grid-rows- container mt-4 items-center">
      <div className="flex items-center justify-between flex-row-reverse">
        <div className="flex items-center gap-x-2 flex-row-reverse">
          <Button>
            <IoIosLogIn />
          </Button>
          <Button>
            <IoCartOutline />
          </Button>

          <form className="hidden md:block  relative">
            <input type="text" className="bg-gray-200 textField__input" />
            <button className="absolute left-0 top-0 flex items-center h-full ml-3"><IoSearchSharp /></button>
          </form>
        </div>
        <div className="flex items-center flex-row-reverse gap-x-2">
          <span className="text-primary-900 text-sm md:text-xl md:font-bold">
            گیاه لند
          </span>
          <RxHamburgerMenu className="bg-gray-200 w-7 h-7 p-1 rounded-lg block md:hidden" />
        </div>
      </div>
      <form className="block md:hidden mt-2 relative">
            <input type="text" className="bg-gray-200 textField__input" />
            <button className="absolute left-0 top-0 flex items-center h-full ml-3"><IoSearchSharp /></button>
          </form>
    </div>
  );
}

export default Header;
