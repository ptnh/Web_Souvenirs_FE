import './style.scss';

import { useEffect, useState } from "react";

import LinkPage from "../../../component/linkPage";
import Register from "../../../component/register";

import { FaEye, FaOpencart } from "react-icons/fa";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [thongbao, setThongbao] = useState('');
  
    const DataUser = [
      { account: 'nhanhanh', password: 'nhanhanh' },
      // Add more user data as needed
    ];
  
    const handleRegister = (e) => {
      e.preventDefault();
      // Check if the username is already taken
      if (DataUser.some((user) => user.account === username)) {
        setThongbao('Tên đăng nhập đã được sử dụng. Vui lòng chọn một tên khác.');
      } else {
        // Add the new user to DataUser array
        DataUser.push({ account: username, password: password });
  
        // Display success message
        setThongbao('Đăng ký tài khoản thành công!');
      }
    };

    return <>
        <LinkPage titlePage={'ĐĂNG KÝ'} linkPage={'Đăng ký'}/>
        <Register DataUser={DataUser} handleRegister={handleRegister} thongbao={thongbao}/>
    </>
}

export default RegisterPage;