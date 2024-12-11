import './style.scss';

import { useEffect, useState } from "react";

import LinkPage from "../../../component/linkPage";
import Login from "../../../component/login";

import { FaEye, FaOpencart } from "react-icons/fa";

const LoginPage = () => {
    const DataUser = [
        { account:'nhanhanh', password: 'nhanhanh'},
    ];
  
    return <>
        {/* <LinkPage titlePage={'ĐĂNG NHẬP'} linkPage={'Đăng nhập'}/>
        <Login DataUser={DataUser}/> */}
    </>    
}

export default LoginPage;