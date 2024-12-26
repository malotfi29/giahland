import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const CardContext = createContext();

let initialState = {
  CardFlowers: [],
  isLoading: false,
  error: null,
  totalPrice:0,
  tempCardItem:0,
};

function cardReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "card/loaded":
      return {
        CardFlowers: action.payload,
        isLoading: false,
      };

    case "card/created":
      return {
        ...state,
        isLoading: false,
        CardFlowers: [action.payload],
      };
    case "card/plusQuantity":
      return {
        ...state,
        isLoading: false,
        CardFlowers: [action.payload],
      };
    case "card/deleted":
      return {
        ...state,
        isLoading: false,
        CardFlowers: [action.payload],
      };
     
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      
    default:
      throw new Error("unknown action");
  }
}

function CardProvider({ children }) {
  const [{ CardFlowers, isLoading,totalPrice,tempCardItem }, dispatch] = useReducer(
    cardReducer,
    initialState
  );
  useEffect(() => {
    async function fetchCardList() {
      dispatch({ type: "loading" });
      try {
       
        const data = JSON.parse(localStorage.getItem("card")) || [];
        dispatch({ type: "card/loaded", payload: data });
        
        
        
      } catch (error) {
        toast.error(error.message);
        dispatch({
          type: "rejected",
          payload: "an error occured in loading card",
        });
      }
    }
    fetchCardList();
  }, []);

  async function createCardItem(newItem) {
    dispatch({ type: "loading" });
    try {
      const savedCard = JSON.parse(localStorage.getItem("card")) || [];
      newItem = { ...newItem, quantity: 1 };
      savedCard.push(newItem);
      localStorage.setItem("card", JSON.stringify(savedCard));
      dispatch({ type: "card/created", payload: savedCard });
      dispatch({ type: "card/loaded", payload: savedCard });
      // window.location.reload();
      toast.success("به سبد خرید اضافه شد");
    } catch (error) {
      toast.error(error.message);
      dispatch({
        type: "rejected",
        payload: "an error occured in creating item",
      });
    }
  }

  async function plusQuantity(item) {
    dispatch({ type: "loading" });
    try {
      let savedCard = JSON.parse(localStorage.getItem("card")) || [];
      let plusedItem = savedCard.find((pItem) => pItem.id === item.id);
      plusedItem.quantity += 1;
      dispatch({ type: "card/plusQuantity", payload: savedCard });
      dispatch({ type: "card/loaded", payload: savedCard });
      localStorage.setItem("card", JSON.stringify(savedCard));
    } catch (error) {
      toast.error(error.message);
      dispatch({
        type: "rejected",
        payload: "an error occured in creating item",
      });
    }
  }

  async function deleteCardItem(id) {
    dispatch({ type: "loading" });
    try {
      let flowers = JSON.parse(localStorage.getItem("card")) || [];
      let deletedItem = flowers.find((dItem) => dItem.id === id);
      if (deletedItem.quantity > 1) {
        deletedItem.quantity -= 1;
      } else {
        flowers = flowers.filter((f) => f.id !== id);
      }
      localStorage.setItem("card", JSON.stringify(flowers));
      // window.location.reload();
      dispatch({ type: "card/deleted", payload: flowers });
      dispatch({ type: "card/loaded", payload: flowers });
    } catch (error) {
      toast.error(error.message);
      dispatch({
        type: "rejected",
        payload: "an error occured in deleting item",
      });
    }
  }

  // async function templateCardItem(){
  //   try {
  //     let cart = JSON.parse(localStorage.getItem("card")) || [];
  //     let tempCardItems = 0;
  //     const totalPrice = cart.reduce((acc, curr) => {
  //       tempCardItems += curr.quantity;
  //       return acc + curr.quantity * curr.price;
  //     }, 0);
  //     dispatch({ type: "card/templateCard", payload: {totalPrice,tempCardItems} });
  //   } catch (error) {
  //     toast.error(error.message);
  //     dispatch({
  //       type: "rejected",
  //       payload: "an error occured in creating item",
  //     });
  //   }
  // }

  return (
    <CardContext.Provider
      value={{
        isLoading,
        CardFlowers,
        createCardItem,
        deleteCardItem,
        plusQuantity,
       
        tempCardItem,
        totalPrice
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;

export function useCard() {
  return useContext(CardContext);
}
