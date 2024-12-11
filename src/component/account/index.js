import './style.scss';

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
const Account = ({userData}) => {
    const navigate = useNavigate();
    const handleLogout = () => {

        // Xóa dữ liệu từ localStorage
        localStorage.removeItem('userData');
        // Cập nhật state hoặc thực hiện các hành động khác liên quan đến đăng xuất
        // Ví dụ: Chuyển hướng về trang đăng nhập
        navigate('/dang-nhap');
        window.location.reload();
      }
      
    return <>
        <div className="section_account">
            <div className='ui_account'>
                <img src="iconmohinh.jpg" className="account-user-avatar"></img>
                <span class="account-user-name">{userData}</span>
            </div>
            <div className="menu_account">
                <span></span>
                    <div class="sub_menu_account">
                        <div class="sub_menu_account_level_1">
                            <a class="sub-menu_info" href='/thong-tin-ca-nhan'>Thông tin</a>
                        </div>
                        <div class="sub_menu_account_level_1">
                            <p class="sub-menu_info"  onClick={handleLogout}>Đăng xuất</p>
                        </div>
                    </div>
            </div>
        </div>

        
    </>
    
}

export default Account;