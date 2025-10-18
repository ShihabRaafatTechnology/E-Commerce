import { useAppSelector } from "@store/hooks"
import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({children}:{children: React.ReactNode}) => {
  const {accessToken} = useAppSelector((state)=> state.auth);
  const navigate = useNavigate();
  
  if(!accessToken){
    console.log("/sign");
    
    navigate("/sign-in?message=login_account")
  }
  return (
    <>
      {children}
    </>
  )
}

export default ProtectRoute
