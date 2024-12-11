import './style.scss';

import LinkPage from "../../../component/linkPage";
import Register from "../../../component/register";
import Login from "../../../component/login";

import { FaEye, FaOpencart } from "react-icons/fa";
import { useEffect, useState } from "react";

const AuthenticationPage = () => {
    const [isAuthen, setIsAuthen] = useState('login');
 
    return <>
        
            {isAuthen === 'login' ? (
                <>
                    <LinkPage titlePage={'ĐĂNG NHẬP'} linkPage={'Đăng nhập'}/>
             
                        <Login />
               
                </>
            ) : (
                <>
                    <LinkPage titlePage={'ĐĂNG KÝ'} linkPage={'Đăng ký'}/>
                    <Register/>
                    {setIsAuthen('login')}
                </>
            )}
    </>
}

export default AuthenticationPage;