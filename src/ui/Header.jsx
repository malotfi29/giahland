import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { IoIosLogIn, IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import HeaderModal from "./HeaderModal";
import HeaderMenu from "./HeaderMenu";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import Search from "../features/Product/Search";
import SearchHeader from "../features/Product/SearchHeader";
import { LuLogOut } from "react-icons/lu";
import toast from "react-hot-toast";

function Header() {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navigate=useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const localUser =await JSON.parse(localStorage.getItem("user")) || {};
        setUser(localUser);
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, [user]);
  const logoutHandler=()=>{
    localStorage.removeItem("user")
    navigate("/")

  }

  return (
    <div className="grid grid-cols-8 grid-rows-2 md:grid-rows-1  w-full py-4 gap-y-4 border-b-2 ">
      <div className="flex items-center gap-x-2  col-span-6">
        <RxHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-100 w-7 h-7 p-1 rounded-lg block md:hidden cursor-pointer"
        />
        <HeaderModal open={isOpen} onClose={() => setIsOpen(false)} title="">
          <HeaderMenu className="flex flex-col" />
        </HeaderModal>
        <span className="text-primary-900 text-sm md:text-xl md:font-bold">
          گیاه لند
        </span>
        <HeaderMenu className="md:flex items-center gap-x-2 hidden text-xs lg:text-sm" />
      </div>

      <div className="flex items-center gap-x-1 col-start-9 flex-row-reverse">
        {Object.keys(user).length > 0 ? (
          <p className="text-sm">سلام {user.name}</p>
        ) : (
          <p className="text-sm">کاربر مهمان</p>
        )}
        <Button className="flex  items-center justify-between w-auto ">
          {Object.keys(user).length > 0 ?  (
            <LuLogOut onClick={logoutHandler} className="text-red-500"/>
          ) : (
            <Link to="/login">
              <IoIosLogIn />
            </Link>
          )}
        </Button>
        <Link to="/card">
          <Button>
            <IoCartOutline />
          </Button>
        </Link>
        <Button
          onClick={() => setOpenSearch(!openSearch)}
          className="flex  items-center justify-between w-auto "
        >
          <IoSearchSharp />
        </Button>
        <Modal
          open={openSearch}
          onClose={() => setOpenSearch(false)}
          title={<SearchHeader query={query} setQuery={setQuery} />}
        >
          <Search query={query} />
        </Modal>
      </div>
    </div>
  );
}

export default Header;
