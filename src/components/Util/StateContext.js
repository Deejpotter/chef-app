import { createContext } from "react";
import initialState from "./initialState";

const StateContext = createContext(initialState);

export default StateContext;