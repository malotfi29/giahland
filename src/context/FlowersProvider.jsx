import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch"


const FlowerContext=createContext()
const BASE_URL="http://localhost:5000/flowers"

function FlowersProvider({children}){
    const{isLoading,data:flowers}=useFetch(BASE_URL)
    return (
        <FlowerContext.Provider value={{ isLoading,flowers }}>
          {children}
        </FlowerContext.Provider>
      );
    }
    
    export default FlowersProvider;
    
    export function useFlowers() {
      return useContext(FlowerContext);
}