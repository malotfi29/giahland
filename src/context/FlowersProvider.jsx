import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";

const FlowerContext = createContext();
const BASE_URL = "http://localhost:5000/flowers";

function FlowersProvider({ children }) {
  const { isLoading, data: flowers } = useFetch(BASE_URL);
  const [currentFlower, setCurrentFlower] = useState("");

  async function getFlower(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);

      setCurrentFlower(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <FlowerContext.Provider
      value={{ isLoading, flowers, getFlower, currentFlower }}
    >
      {children}
    </FlowerContext.Provider>
  );
}

export default FlowersProvider;

export function useFlowers() {
  return useContext(FlowerContext);
}
