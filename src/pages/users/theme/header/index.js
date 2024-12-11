import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import CartProduct from "../../../../component/cartProduct";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import Account from "../../../../component/account";
const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [userData, setUserData] = useState(null);

    // Tạo một useEffect để theo dõi sự thay đổi của localStorage
    useEffect(() => {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
        setUserData(userDataFromLocalStorage);
    }, [userData]); // Đảm bảo useEffect chỉ chạy một lần khi thành phần được render

    //lấy thông tin khách qua id
    const [infoAccountLogin, setInfoAccountLogin] = useState({}); 
    useEffect(() => {
        fetch(`http://localhost:8181/business_api/account_api/read.php?id_account=${userData}`)
            .then((response) => response.json())
            .then((data) => {
               setInfoAccountLogin(data);
             
            });
    }, [infoAccountLogin]); 

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
    <>
        <header>
            <div class="header_first">
                <div class="sectionleft">
                    <img src="logo.jpg" alt="Logo" width="160" height="50"></img>
                </div>
                <section class="component-search">
                    <input class="input-content-search" type="text" placeholder="Nhập từ khóa tìm kiếm" />
                    <button class="search-button">
                        <i class="fas fa-search"><FaSearch /></i>
                    </button>
                </section>
                    { userData ? (
                        <>
                       
                        <Account userData={infoAccountLogin.username_client}/>
                        <CartProduct idClient={infoAccountLogin.id_client}/>
                        </>
                        
                    ) : (<>
                     {/* <p>{userData}</p> */}
                    <section class="component-login">
                        <Link to="/dang-ky" className="link-login">Đăng ký</Link>
                        <Link to="/dang-nhap" className="link-singin">Đăng nhập</Link>
                    </section>
                 
                </>)}
                    
                
  
                    
               
            </div>
            
            <div class="header_second">
                <section class="component-catalog">
                    <div class="open-catalog"  onClick={toggleVisibility}>
                        <p class="title-icon"><CgPlayListSearch /></p>
                        <p class="title-content">DANH MỤC SẢN PHẨM</p>
                    </div>
                    
                    <div className={`option-catalog ${isVisible ? 'visible' : ''}`}   id="optionCatalog">
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=Bear" className="option-content">Gấu bông</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=Painting" className="option-content">Tranh</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=ToyModel" className="option-content">Mô hình</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=Clock" className="option-content">Đồng hồ</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=Glass" className="option-content">Pha lê</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/all-sp?type=" className="option-content">Khác</Link>
                        </div>
                    </div>
                </section>
                <section class="component-menu">
                    <div class="has-menu">
                        <ul class="has-menu-level-1">
                            <li> <Link to="/" className="has-a">Trang chủ</Link>
                                <span></span>
                            </li>
                            <li> <Link to="/gioi-thieu" className="has-a">Giới thiệu</Link>                     
                                <span></span>
                            </li>
                            <li><a class="has-a" href="#">Sản phẩm <i class="fa-solid fa-caret-down"></i></a>
                                <span></span>
                                <div class="sub-menu">
                                    <div class="sub-menu-level-1">
                                        <p class="sub-li"><Link to="/all-sp?type=Bear" className="sub-a">Gấu bông</Link></p>
                                        <p class="sub-li"><Link to="/all-sp?type=Painting" className="sub-a">Tranh</Link></p>
                                        <p class="sub-li"><Link to="/all-sp?type=ToyModel" className="sub-a">Mô hình</Link></p>
                                        <p class="sub-li"><Link to="/all-sp?type=Clock" className="sub-a">Đồng hồ</Link></p>
                                        <p class="sub-li"><Link to="/all-sp?type=Glass" className="sub-a">Pha lê</Link></p>
                                        <p class="sub-li"><Link to="/all-sp?type=Diversity" className="sub-a">Khác</Link></p>
                                    </div>
                                </div>
                            </li>
                            <li><a class="has-a" href="bai-bao">Tin tức</a>
                                <span></span>
                            </li>
                            <li><a class="has-a" href="lien-he">Liên hệ</a>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="component-hotline">
                    <p class="icon-hot"><CgPlayListSearch /></p>
                    <p class="text">Hotline:</p>
                    <p class="phone">19006750</p>
                </section>
            </div>
        </header>
       
    </>)
}

export default Header;