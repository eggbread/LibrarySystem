import { useReducer, useState } from "react";
import axios from "axios";

const SingUp = () => {};

const initialState = {
  isLogin: false,
  modal: {
    showSI: false,
    showSU: false,
    showMP: false
  },
  signin: {
    userId: "",
    userPw: ""
  },
  signup: {
    userId: "",
    userPw: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userJob: "Bachelor"
  },
  userdata: {
    userId: "",
    userPw: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userJob: "",
    userList:[]
  }
};
const modalReducer = (state, action) => {
  switch (action) {
    case "openSI": {
      return { ...state, showSI: true };
    }
    case "openSU": {
      return { ...state, showSU: true };
    }
    case "openMP": {
      return { ...state, showMP: true };
    }
    case "hideSI": {
      return { ...state, showSI: false };
    }
    case "hideSU": {
      return { ...state, showSU: false };
    }
    case "hideMP": {
      return { ...state, showMP: false };
    }
    default: {
      throw new Error("Error");
    }
  }
};
const signinReducer = (state, action) => {
  switch (action.type) {
    case "setId": {
      return { ...state, userId: action.userId };
    }
    case "setPw": {
      return { ...state, userPw: action.userPw };
    }
    case "setData": {
      if (!(state.userId && state.userPw)) {
        return false;
      }
      return SignIn(state.userId, state.userPw);
    }
    default: {
      throw new Error("Error");
    }
  }
};

const userdataReducer = (state, action) => {
  switch (action.type) {
    case "all": {
      return { ...state, ...action };
    }
    case "setId": {
      return { ...state, userId: action.userId };
    }
    case "setPw": {
      return { ...state, userPw: action.userPw };
    }
    case "setName": {
      return { ...state, userName: action.userName };
    }
    case "setEmail": {
      return { ...state, userEmail: action.userEmail };
    }
    case "setPhone": {
      return { ...state, userPhone: action.userPhone };
    }
    case "setJob": {
      return { ...state, userJob: action.userJob };
    }
    case "setList": {
      return { ...state, userList: action.userList };
    }
    default: {
      throw new Error("Error");
    }
  }
};
const signupReducer = (state, action) => {
  switch (action.type) {
    case "setId": {
      return { ...state, userId: action.userId };
    }
    case "setPw": {
      return { ...state, userPw: action.userPw };
    }
    case "setName": {
      return { ...state, userName: action.userName };
    }
    case "setEmail": {
      return { ...state, userEmail: action.userEmail };
    }
    case "setPhone": {
      return { ...state, userPhone: action.userPhone };
    }
    case "setJob": {
      return { ...state, userJob: action.userJob };
    }
    default: {
      throw new Error("Error");
    }
  }
};
export default type => {
  switch (type) {
    case "isLogin": {
      return useState(false);
    }
    case "modal": {
      return useReducer(modalReducer, initialState.modal);
    }
    case "signin": {
      return useReducer(signinReducer, initialState.signin);
    }
    case "signup": {
      return useReducer(signupReducer, initialState.signup);
    }
    case "userdata": {
      return useReducer(userdataReducer, initialState.userdata);
    }
  }
};
