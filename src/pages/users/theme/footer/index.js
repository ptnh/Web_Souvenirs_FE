import './style.scss';

import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return <>
        <section class="service">
            <div class="service-driver">
                <div class="icon-container">
                    <img src="xetai.png" class="icon-service" alt="Icon 1"/>
                </div>
                <div class="detail-service">
                    <p class="title-service">
                        GIAO HÀNG MIỄN PHÍ
                    </p>
                    <p class="content-service">
                        Giao hàng miễn phí với đơn trên 300.000đ
                    </p>
                </div>
            </div>
            <div class="service-driver">
                <div class="icon-container">
                    {/* <i class=" fa-solid fa-car" class="icon-service"></i> */}
                    <img src="dongho.png" class="icon-service" alt="Icon 1" />
                </div>
                <div class="detail-service">
                    <p class="title-service">
                        HỖ TRỢ 24/7
                    </p>
                    <p class="content-service">
                        Nhanh chóng thuận tiện
                    </p>
                </div>
            </div>
            <div class="service-driver">
                <div class="icon-container">
                    <img src="thunghang.png" class="icon-service" alt="Icon 1"/>
                </div>
                <div class="detail-service">
                    <p class="title-service">
                        ĐỔI TRẢ 3 NGÀY
                    </p>
                    <p class="content-service">
                        Hấp dẫn chưa từng có
                    </p>
                </div>
            </div>
            <div class="service-driver">
                <div class="icon-container">
                    <img src="sotay.png" class="icon-service" alt="Icon 1"/>
                </div>
                <div class="detail-service">
                    <p class="title-service">
                        GIÁ TIÊU CHUẨN
                    </p>
                    <p class="content-service">
                        Tiết kiệm 10% giá cả
                    </p>
                </div>
            </div>
        </section>

        <section class="footer">
            <section class="component-info-shop">
                <div class="logo-footer">
                    <a href="#"><img src="slider_1.png" class="image-logo-footer" /></a>
                </div>
                <p class="name-shop">Siêu thị nội thất Sea Furniture</p>
                <p class="address-shop">Trụ sở chính: Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội</p>
                <p class="phone-shop">Hotline: <span>1900 6750</span></p>
                <p class="email-shop">Email: <span>seateam@gmail.com</span></p>
            </section>
            <section class="component-menu-footer">
                <h4 class="title-menu-footer">VỀ CHÚNG TÔI</h4>
                <ul class="has-menu-footer">
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Trang chủ</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Giới thiệu</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Sản phẩm</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Tin tức</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Liên hệ</a></li>
                </ul>
            </section>
            <section class="component-menu-footer">
                <h4 class="title-menu-footer">TIN KHUYẾN MÃI</h4>
                <ul class="has-menu-footer">
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Trang chủ</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Giới thiệu</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Sản phẩm</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Tin tức</a></li>
                    <li class="li-has-menu-footer"><span class="border-left-footer"></span><a href="#" class="a-has-menu-footer">Liên hệ</a></li>
                </ul>
            </section>
            <section class="component-end-footer">
                <h4 class="title-end-footer">TỔNG ĐÀI HỖ TRỢ</h4>
                <div class="phone-end-footer">
                    <div class="icon-phone-footer-end"><FaPhoneAlt/></div>
                    <p class="phone-end-footer">1900 6794</p>
                </div>
                <h4 class="title-end-footer">NHẬN TIN KHUYẾN MÃI</h4>
                <div class="form-container-footer">
                    <input class="input-signin" type="text" placeholder="Nhập email..." />
                    <button class="btn-sign-in">Đăng ký</button>
                </div>
            </section>
        </section>
    </>
}

export default Footer;