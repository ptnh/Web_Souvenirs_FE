import {meno} from "react";
import { useEffect, useState } from "react";
import LinkPage from "../../../component/linkPage";
import "./style.scss";
const ProfilePage = () => {

    return (
        <>
            <LinkPage titlePage={'Thông tin'} linkPage={'Thông tin'}/>
            <div className="section_info_client">
                <img src="background.png"></img>
                <div className="content_info">
                    <h3 className="title_info">Thông tin khách hàng</h3>
                        <form>
                            <div className="info_detail">
                                <h3>Tên khách hàng:</h3>
                                <input  type="text" name="name_client" required />
                            </div>
                            <div className="info_detail">
                                <h3>Địa chỉ:</h3>
                                <input type="text" name="address_client" required/>
                            </div>                                   
                            <div className="info_detail">
                                <h3>Số điện thoại:</h3>
                                <input type="text" name="phone_client" required/>
                            </div>
                            <div className="info_detail">
                                <h3>Email:</h3>
                                <input type="text" name="email_client" required/>
                            </div>
                            <div className="info_detail">
                                <h3>Tài khoản:</h3>
                                <input type="text" name="username_client"/>
                            </div>
                            <div className="info_detail">
                                <h3>Password:</h3>
                                <input type="password" name="password_account" required/>
                            </div>
                            
                        </form>
                        
                </div>
            </div>
           
        </>
    );
};
export default ProfilePage;