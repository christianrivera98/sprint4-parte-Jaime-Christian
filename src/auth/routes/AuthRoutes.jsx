import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import LoginByPhone from '../pages/LoginByPhone';
import { InsertCode } from '../pages/InsertCode';





export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } /> 
        <Route path="loginWithCell" element = { <LoginByPhone/> } />
        <Route path="insertCode" element = { <InsertCode/> } />
        {/* <Route path = '/slider' element = {<Slider/>} /> */}
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
