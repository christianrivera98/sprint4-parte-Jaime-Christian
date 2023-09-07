import { Navigate, Route, Routes } from "react-router-dom"
import { FoodAppPage } from "../pages/FoodAppPage"
import { InsertCode } from "../../auth/pages/InsertCode"

// import LoginByPhone from "../../auth/pages/LoginByPhone"




export const FoodAppRoutes = () => {
  return (
    <Routes>

        <Route path="/" element = { <FoodAppPage/> } />
        {/* <Route path="/loginWithCell" element = {<LoginByPhone/>} /> */}
        <Route path="/insertcode" element={ <InsertCode/>} />
        <Route path="/*" element = { <Navigate to= "/" />} />


    </Routes>
  )
}
