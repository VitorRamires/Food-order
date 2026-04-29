import { MealsOnCartContext } from "../components/context/MealsOnCart";
import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  useState,
} from "react";

export function useTotalCalc(itemList) {
  
  function reducer(state, action) {
    if (!action) return state;

    if (action.type === "SUBTOTAL_CALCULATE") {
      const newSubtotal = action.payload.reduce((total, item) => {
        return total + item.price * (item.quantity || 1);
      }, 0);

      return {
        ...state,
        items: action.payload,
        subtotal: newSubtotal,
      };
    }

    return state;
  }

  const initialState = {
    items: itemList,
    subtotal: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SUBTOTAL_CALCULATE", payload: itemList });
  }, [itemList]);

  return { subtotal: state.subtotal, dispatch };
}
