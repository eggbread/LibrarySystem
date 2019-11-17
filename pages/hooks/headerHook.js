import {useReducer,useState} from "react"
import axios from "axios"

  
  const SingUp = () =>{
  
  }

const initialState={
    isLogin:false,
    modal:{
      showSI:false,
      showSU:false,
    },
    signin:{
      userId:"",
      userPw:""
    },
    signup:{
        userId:"",
        userPw:"",
        userName:"",
        userEmail:"",
        userPhone:"",
        userJob:""
    }
  }
  const modalReducer=(state,action)=>{
    switch(action){
      case "openSI":{
        return{...state,showSI:true}
      }
      case "openSU":{
        return{...state,showSU:true}
      }
      case "hideSI":{
        return{...state,showSI:false}
      }
      case "hideSU":{
        return{...state,showSU:false}
      }
      default:{
        throw new Error("Error")
      }
    }
  }
  const signinReducer=(state,action)=>{
        switch(action.type){
            case "setId":{
                return{...state,userId:action.userId}
            }
            case "setPw":{
                return{...state,userPw:action.userPw}
            }
            case "setData":{
                if(!(state.userId&&state.userPw)){
                    return false;
                }
                return SignIn(state.userId,state.userPw)
               
            }
            default:{
                throw new Error("Error")
            }
    }
  }
  export default (type) => {
      switch(type){
          case "isLogin":{
              return useState(false)
          }
          case "modal":{
              return useReducer(modalReducer,initialState.modal);
          }
          case "signin":{
            return useReducer(signinReducer,initialState.signin);
          }
          case "signup":{
              return useReducer(modalReducer,initialState.signup)
          }
      }
  }