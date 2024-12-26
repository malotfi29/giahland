import { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const BASE_URL = "http://localhost:5000/users";

function UserProvider({ children }) {
  const { isLoading, data: users } = useFetch(BASE_URL);
 
 const navigate=useNavigate()
   function addUser(data) {
    try {
      const addedUser=users.some(user=>user.mobile===data.mobile)
      if(addedUser){
        toast.error("کاربری با این شماره موبایل وجود دارد")
      }
      else{
        axios.post(`${BASE_URL}`,data);

        toast.success("به گیاه لند خوش آمدید")
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");  
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  function editUser({data,id}) {
    try{
        axios.patch(`${BASE_URL}/${id}`,data);

        
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("پروفایل به روزرسانی شد")
      }
    catch (error) {
      toast.error(error.message);
    }
  }

  

  return (
    <UserContext.Provider value={{ isLoading, users, addUser,editUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export function useUsers() {
  return useContext(UserContext);
}
