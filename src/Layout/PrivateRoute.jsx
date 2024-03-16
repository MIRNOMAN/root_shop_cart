import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser, toggoleLoding } from "../redux/user/userSlice";

import Loading from "./Loading";
import auth from "../firebase/firebase.config";


const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation(); 
    const dispatch = useDispatch()
    const {email,isLoading} = useSelector((state)=> state.userSlice)
  
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          dispatch(setUser({
            name: user.displayName,
            email: user.email
          }))
          dispatch(toggoleLoding(false))
        }else{
          dispatch(toggoleLoding(false))
        }
      })
    },[dispatch])
  
    if (isLoading) {
      return <Loading />;
    }
  
    if (!isLoading && !email) {
      return <Navigate to="/login" state={{ path: pathname }} />;
    }
  
    return children;
}

export default PrivateRoute