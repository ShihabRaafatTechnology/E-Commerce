import {  Header } from "@components/common"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default MainLayout