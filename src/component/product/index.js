import './style.scss';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ViewProduct from "../viewProduct";
import { createApiCart, readApiCart, updateApiCart } from "../../api";

import { FaEye, FaOpencart } from "react-icons/fa";

const Product = ({idProduct, imgProduct, nameProduct, price, store}) => {
    const [userData, setUserData] = useState(null);

    // Tạo một useEffect để theo dõi sự thay đổi của localStorage
    useEffect(() => {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
        setUserData(userDataFromLocalStorage);
    }, [userData]); // Đảm bảo useEffect chỉ chạy một lần khi thành phần được render
    
    const [isHovered, setIsHovered] = useState(false);

    // const [idViewProduct, setIdViewProduct] = useState(1);
    const [isShowMini, setShowMini] = useState(false);

    const toggleShowMini = (e) => {
        e.preventDefault();
        // setIdViewProduct(idProduct);
        // alert(idViewProduct);
        setShowMini(!isShowMini);
    };

    const toggleAddProduct = (e) => {
        e.preventDefault();
        let count = 0;
        fetch(readApiCart)
            .then((response) => response.json())
            .then((data) => {
                const existingCartItem = data.find(
                    (item) => item.id_owner === userData && item.id_product === idProduct,
                );
                if (existingCartItem) {
                    count = parseInt(existingCartItem.quantity, 10);
                    count = count + 1;
                    const formData2 = new FormData();
                    formData2.append('id_owner', userData);
                    formData2.append('id_product', idProduct);
                    formData2.append('name_product', nameProduct);
                    formData2.append('image_represent',imgProduct);
                    formData2.append('price_product',  price);
                    formData2.append('quantity', count);
                    fetch(updateApiCart, {
                        method: 'POST',
                        body: formData2,
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            // toast.success('Thêm sản phẩm thành công!');
                        })
                        .catch((error) => console.error('Error updating cart item:', error));
                } else {
                    const formData2 = new FormData();
                    formData2.append('id_owner', userData);
                    formData2.append('id_product', idProduct);
                    formData2.append('name_product', nameProduct);
                    formData2.append('image_represent', imgProduct);
                    formData2.append('price_product', price);
                    formData2.append('quantity', 1);

                    fetch(createApiCart, {
                        method: 'POST',
                        body: formData2,
                    })
                        .then((response) => {
                            if (response.ok) {
                                // toast.success('Thêm sản phẩm thành công!');
                            } else {
                                throw new Error('Có lỗi xảy ra khi xóa sản phẩm.');
                            }
                        })
                        .catch((error) => console.error('Error deleting product:', error));
                }
            });
       
    };

    return <>
    <ViewProduct idProduct={idProduct} imageUrl={imgProduct} isViewProduct={isShowMini} toggleViewProduct={toggleShowMini} store={store}/>
        <section id="product-follow-id" class="component-mini-advertiver-outstanding-products">
            <div class="mini-image-represent">
                <div class="mini-position-ticket"> 
                    <Link to="/san-pham" className="show-detail-product">        
                        <img src={`${imgProduct}`} class="mini-ticket-image" />
                        <span class="mini-hide">
                            <div class="mini-transform-buy">
                                <button onClick={toggleShowMini} class="mini-btn-view-product"><FaEye /></button>
                                <button  onClick={toggleAddProduct} class="mini-btn-view-more"><FaOpencart /></button>
                            </div>
                        </span>
                    </Link>
                </div>
            </div>
            <div class="mini-detail-info-represent">
                <div class="mini-name-product">{nameProduct}</div>
                <div class="mini-price-product">{price} <span class="mini-vnd">đ</span></div>
            </div>
        </section>    
    </>
}
export default Product;