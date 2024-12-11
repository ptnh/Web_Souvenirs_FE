import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";

const InfoContact = () => {
    return (
        <>
            <div className="section_info_contact">
                <div className="contact_online">
                    <div className="manual_contact">
                        <div className="area_info_contact">
                            <FaSearch className="icon_info_contact" />
                            <p className="detail_info_contact">94 Trần Vĩ, Xã Ba Vì, Huyện Ba Vì, Hà Nội, Vietnam</p>
                        </div>
                        <div className="area_info_contact">
                            <FaSearch className="icon_info_contact" />
                            <p className="detail_info_contact">Hotline: 0332212903</p>
                        </div>
                        <div className="area_info_contact">
                            <FaSearch className="icon_info_contact" />
                            <p className="detail_info_contact">hanhptn.12a1bb.1920@gmail.com</p>
                        </div>
                    </div>
                    <div className="send_email_contact">
                        <h4 className="title_contact">Liên hệ</h4>
                        <form>
                        
                            <input className="purport" id="hoTen" name="hoTen" placeholder="Họ và tên" required />
                            <br />

                            <input className="purport" type="email" id="email" name="email" placeholder="Email" required />
                            <br />

                            <textarea className="purport_response" id="noiDung" name="noiDung" rows="4" placeholder="Nội dung"  required ></textarea>
                            <br />

                            <input className="btn-send-email" type="submit" value="Gửi liên hệ" />
                        </form>
                    </div>
                </div>
                <div className="contact_address">
                    <iframe className="map_shop"
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9901.401020407884!2d106.61601079799645!3d11.255692915434704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174ca09ec0a66ed%3A0xdae46b5d6a5f45c8!2zQsOgdSBCw6BuZywgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1690451867712!5m2!1svi!2s`}>
                    </iframe>
                </div>
            </div>
        </>        
    )
}

export default InfoContact;