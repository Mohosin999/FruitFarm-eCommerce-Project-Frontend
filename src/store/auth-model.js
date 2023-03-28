import axios from "axios";
import { action, thunk } from "easy-peasy";

const authModel = {
  isAuthenticated: false,

  logout: action((state) => {
    state.isAuthenticated = false;
  }),

  setAuthenticated: action((state, isAuthenticated) => {
    state.isAuthenticated = isAuthenticated;
    console.log(state.isAuthenticated);
  }),

  login: thunk(async (actions, credentials) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      actions.setAuthenticated(true);
    } else {
      throw new Error("Failed to login");
    }
  }),

  register: thunk(async (actions, credentials) => {
    if (credentials.status === 200) {
      actions.setAuthenticated(true);
    } else {
      throw new Error("Failed to register");
    }
  }),
};

export default authModel;
