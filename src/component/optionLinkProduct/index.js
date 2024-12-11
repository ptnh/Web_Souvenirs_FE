
import './style.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const optionLinkProduct = () => {

    return <>
        <div class="type-option-first">
            <section class="component-mini-select">
                <div class="title-mini-select">
                    <span>DANH MỤC</span>
                </div>
            </section>
            <section class="component-select-first">
                <ul class="has-menu-select-first">
                    <li class="sub-menu-select-first"><Link to="/" className="link-menu-select-first">Trang chủ</Link></li>
                    <li class="sub-menu-select-first"><Link to="/gioi-thieu" className="link-menu-select-first">Giới thiệu</Link></li>
                    <li class="sub-menu-select-first"><Link to="/all-sp" className="link-menu-select-first">Sản phẩm</Link></li>
                    <li class="sub-menu-select-first"><Link to="/bai-bao" className="link-menu-select-first">Tin tức</Link></li>
                    <li class="sub-menu-select-first"><Link to="/lien-he" className="link-menu-select-first">Liên hệ</Link></li>
                </ul>
            </section>
        </div>
    </>
}

export default optionLinkProduct;

