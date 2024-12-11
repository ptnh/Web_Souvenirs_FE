import './style.scss';

import { useEffect, useState } from "react";
import {readApiCart, deleteApiCart } from '../../api';

import { FaShoppingCart} from "react-icons/fa";
const CartProduct = ({idClient}) => {
    const [carts, setCarts] = useState([]);
    const [cartsUpdated, setCartsUpdated] = useState(false);
    const [quantities, setQuantities] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    //lấy data giỏ hàng và khi có thay đổi sẽ cập nhật
    useEffect(() => {
        fetch(readApiCart)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.id_owner == idClient);
                setCarts(filteredData);
    
                setTotalQuantity(filteredData .length);
            });
    }, [cartsUpdated,carts]);
    
    // Hàm cập nhật giỏ hàng khi có thay đổi
    const updateCarts = () => {
        setCartsUpdated(!cartsUpdated);
    };

    //xử lý xóa sản phẩm khỏi giỏ hàng
    const deleteCartItem  = (cart) => {
        const formData2 = new FormData();
        formData2.append('id_cart', cart.id_cart);
        formData2.append('id_owner', cart.id_owner);
        formData2.append('id_product', cart.id_product);
        formData2.append('name_product', cart.name_product);
        formData2.append('image_reprsent', cart.image_represent);
        formData2.append('price_product', cart.price_product);
        formData2.append('quantity', cart.quantity);
        fetch(deleteApiCart, {
            method: 'POST',
            body: formData2,
        })
            .then((response) => {
                if (response.ok) {
                    updateCarts(); //gọi hàm update giỏ hàng
                } else {
                    throw new Error('Có lỗi xảy ra khi xóa sản phẩm.');
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    return <>
        <div class="header__cart">
            <div class="header__cart-wrap">
                <i class="header__cart-icon fa-solid fa-cart-shopping"><FaShoppingCart /></i>
                <span class="header__cart-notice">
                    <p>{totalQuantity}</p>
                </span>
                {/* <!-- No cart: header__cart-list--no-cart --> */}
                <div class="header__cart-list">
                    {totalQuantity === 0  ? (
                        <>
                            <img src="ghe.png" alt="" class="header__cart-no-cart-img" />
                            <span class="header__cart-list-no-cart-msg">
                                Chưa có sản phẩm
                            </span>
                        </>
                      
                    ):(
                        <>
                            <h4 class="header__cart-heading">Sản phẩm đã thêm</h4>
                            <ul class="header__cart-list-item">
                                {carts.map((cart, index) => (
                                    <li key={index} class="header__cart-item">
                                        <img src={cart.image_represent} alt="" class="header__cart-img" />
                                        <div class="header__cart-item-info">
                                            <div class="header__cart-item-head">
                                                <h5 class="header__cart-item-name">{cart.name_product}</h5>
                                                <div class="header__cart-item-price-wrap">
                                                    <span class="header__cart-item-price">{cart.price}</span>
                                                    <span class="header__cart-item-multiply">x</span>
                                                    <span class="header__cart-item-qnt">{cart.quantity}</span>
                                                </div>
                                            </div>
                                            <div class="header__cart-item-body">
                                                <span class="header__cart-item-description">
                                                    
                                                </span>
                                                <span class="header__cart-item-remove" onClick={() => deleteCartItem(cart)}>
                                                    Xóa
                                                </span>

                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <a href={`/gio-hang?code=${idClient}`} class="header__cart-view-cart btn-view-cart-header">Xem giỏ hàng</a >
                </div>
            </div>
        </div>
    </>
}

export default CartProduct;