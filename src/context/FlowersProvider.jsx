import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";

const FlowerContext = createContext();
const BASE_URL = "https://giahland.onrender.com";

function FlowersProvider({ children }) {
  const { isLoading, data: flowers } = useFetch(BASE_URL);
  const [currentFlower, setCurrentFlower] = useState("");
  const [searchResult, setSearcResult] = useState([]);

  async function getFlower(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);

      setCurrentFlower(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function searchFlower(query) {
    try {
      const { data } = await axios.get(`${BASE_URL}`);
setSearcResult(data.filter(d=>d.title.includes(query)))

      
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <FlowerContext.Provider
      value={{ isLoading, flowers, getFlower, currentFlower,searchFlower,searchResult }}
    >
      {children}
    </FlowerContext.Provider>
  );
}

export default FlowersProvider;

export function useFlowers() {
  return useContext(FlowerContext);
}
