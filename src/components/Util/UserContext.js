import { createContext } from "react";
import initialUser from "./initialUser";

const UserContext = createContext(initialUser);

export default UserContext;