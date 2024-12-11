import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";

const FormPayInfo = ({name, setName, phone, setPhone, address, setAddress }) => {
    return (
        <>
            <div className="section_info_contact_user">
                <p className="text_contact">Thông tin liên hệ</p>
                <div className="form_info_user">
                <label>
                    Tên:
                    <input className="input_info_user" type="text" value={name} placeholder="Tên" required  onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Số điện thoại:
                    <input className="input_info_user" type="text" value={phone} placeholder="Số điện thoại" required  onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    Địa chỉ:
                    <input className="input_info_user"  type="text" value={address} placeholder="Địa chỉ" required onChange={(e) => setAddress(e.target.value)} />
                </label>
                </div>
            </div>
     
        </>        
    )
}

export default FormPayInfo;