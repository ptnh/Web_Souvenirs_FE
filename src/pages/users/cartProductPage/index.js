import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import LinkPage from "../../../component/linkPage";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import { createApiCart, createApiOrder, deleteApiCart, readApiCart, updateApiCart } from "../../../api";
import FormPayInfo from "../../../component/formPayInfo";
import {useNavigate } from 'react-router-dom';
const CartProductPage = () => {
    const navigate = useNavigate();
    // Lấy giá trị id từ URL
    const urlParamCart = new URLSearchParams(window.location.search);
    const id_client = urlParamCart.get('code');

    const [carts, setCarts] = useState([]);
    const [cartsUpdated, setCartsUpdated] = useState(false);
    //số lượng từng sản phẩm
    const [quantities, setQuantities] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    //tính tổng tiền
    const [totalSumMoney, setTotalSumMoney] = useState(0);
    //lấy data giỏ hàng và khi có thay đổi sẽ cập nhật
    useEffect(() => {
        fetch(readApiCart)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.id_owner == id_client);
                
                setCarts(filteredData);

                const quantitiesArray = filteredData.map((item) => item.quantity);
                setQuantities(quantitiesArray);
                const money = filteredData.map((item) => item.quantity * item.price_product);
                const totalSumMoneys = money.reduce((acc, curr) => acc + curr, 0); // Tính tổng các số trong mảng money
                setTotalSumMoney(totalSumMoneys);
    
            });
    }, [cartsUpdated,carts]);
 
    const handleDeleteProductInCart = (cart,e) => {
        e.preventDefault();
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
                   
                } else {
                    throw new Error('Có lỗi xảy ra khi xóa sản phẩm.');
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    const idString = id_client.toString();
    const decreaseQuantity = (id, id_product, cart) => {
        let count = 0;
        // Gửi request GET đến API để lấy dữ liệu hiện tại
        fetch(readApiCart)
            .then((response) => response.json())
            .then((data) => {
                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
                const existingCartItem = data.find((item) => item.id_owner === idString && item.id_product === id_product);

                if (existingCartItem) {
                    count = parseInt(existingCartItem.quantity, 10);
                    if (count === 0) {
                    } else {
                        count = count - 1;
                        const formData2 = new FormData();
                        formData2.append('id_cart', '');
                        formData2.append('id_owner', id_client );
                        formData2.append('id_product', cart.id_product);
                        formData2.append('name_product', cart.name_product);
                        formData2.append('image_represent', cart.image_represent);
                        formData2.append('price_product', cart.price_priduct);
                        formData2.append('quantity', count);
                        fetch(updateApiCart, {
                            method: 'POST',
                            body: formData2,
                        })
                            .then((response) => response.json())
                            .then((data) => {})
                            .catch((error) => console.error('Error updating cart item:', error));
                    }
                }
            });
    };

    
    const handleIncreaseQuantity = (id, id_product, cart) => {
        let count = 0;
        // Gửi request GET đến API để lấy dữ liệu hiện tại
        fetch(readApiCart)
            .then((response) => response.json())
            .then((data) => {
                // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
                const existingCartItem = data.find((item) => item.id_owner === idString && item.id_product === id_product);

                if (existingCartItem) {
                    count = parseInt(existingCartItem.quantity, 10);
                    
                        count = count + 1;
                        const formData2 = new FormData();
                        formData2.append('id_cart', '');
                        formData2.append('id_owner', id_client );
                        formData2.append('id_product', cart.id_product);
                        formData2.append('name_product', cart.name_product);
                        formData2.append('image_represent', cart.image_represent);
                        formData2.append('price_product', cart.price_priduct);
                        formData2.append('quantity', count);
                        fetch(updateApiCart, {
                            method: 'POST',
                            body: formData2,
                        })
                            .then((response) => response.json())
                            .then((data) => {})
                            .catch((error) => console.error('Error updating cart item:', error));
                    }
                
            });
    };
   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

   

    const [flagButtonConfirm, setFlagButtonConfirm] = useState(false);
    const handlePay = (e) => {
        e.preventDefault();
        setFlagButtonConfirm(true);
    }
    const handleConfirmPay = (e,carts) => {
        e.preventDefault();
        if (name.trim() === '' || phone.trim() === '' || address.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }
        carts.map((cart) => {
            const formData2 = new FormData();
            formData2.append('id_order', '');
            formData2.append('id_owner', cart.id_owner);
            formData2.append('id_product', cart.id_product);
            formData2.append('name_product', cart.name_product);
            formData2.append('image_represent', cart.image_represent);
            formData2.append('quantity', cart.quantity);
            formData2.append('price_product', cart.price_product);       
            formData2.append('phone_receiver',phone);
            formData2.append('address_receiver', address);
        
            fetch(createApiOrder, {
                method: 'POST',
                body: formData2,
            })
                .then((response) => {
                    if (!response.ok) {
                    }
                })
                .catch((error) => console.error(`Lỗi thêm đơn hàng`, error));
        });
        for (let i = 0; i < carts.length; i++) {
            const formData = new FormData();
            formData.append('id_cart', carts[i].id_cart);
            formData.append('id_owner', id_client);
            fetch(deleteApiCart, {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Có lỗi xảy ra khi xóa sản phẩm thứ ${i + 1}.`);
                    }
                })
                .catch((error) => console.error(`Error deleting product ${i + 1}:`, error));
        }
        navigate('/');
    };
    

    return (
        <>
            <LinkPage titlePage={'GIỎ HÀNG'} linkPage={'Giỏ hàng'}/>
            {flagButtonConfirm ? <FormPayInfo  name={name}
    setName={setName}
    phone={phone}
    setPhone={setPhone}
    address={address}
    setAddress={setAddress}/> : null}
            <section class="component-cart">
            
            <h4 class="title-cart-client">Giỏ hàng của bạn</h4>
          
            
            {carts.length === 0 ? (
                <>
                    <section class="component-no-cart">
                        <p>Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp tục mua sắm.</p>
                    </section>
                </>
            ):(
                <>
                     <table class="table-info-cart">
                <tr>
                    <th></th>
                    <th>Sản phẩm</th>
                    <th></th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
                {carts.map((cart, index) => (           
                    <tr key={index}>
                        <td><button class="btn-x" onClick={(e) => handleDeleteProductInCart(cart, e)}>x</button></td>
                        <td><img src={cart.image_represent} class="image-picture-product"></img></td>
                        <td>{cart.name_product}</td>
                        <td>{cart.price_product} <span class="vnd">đ</span></td>
                        <td> 
                            <button  onClick={() => decreaseQuantity(cart.id_cart, cart.id_product, cart)}>-</button>
                                <input 
                                    // type="number" 
                                    name="quantity" 
                                    className="custom-input" 
                                    value={quantities[index]}  
                                />
                            <button onClick={() => handleIncreaseQuantity(cart.id_cart, cart.id_product, cart)}>+</button>
                        </td>
                        <td>{cart.price_product*cart.quantity} <span className="vnd">đ</span></td>
                    </tr>
                ))}
                                    
                    </table>
                    
                    {flagButtonConfirm ? <>
                        <div class="sum-money-bought-product">
                        <a class="btn-pay" onClick={(e) => handleConfirmPay(e,carts)}>Xác nhận</a>
                        <p class="text-pay">Thanh toán:</p>
                        <p class="money-bought">{totalSumMoney}<span class="pay-vnd">đ</span></p>
                    </div>
                    </> : <>
                    <div class="sum-money-bought-product">
                        <a class="btn-pay" onClick={(e) => handlePay(e)}>Tiến hành thanh toán</a>
                        <p class="text-pay">Thanh toán:</p>
                        <p class="money-bought">{totalSumMoney}<span class="pay-vnd">đ</span></p>
                    </div>
                    </>}
                    
                </>
            )}
                                
                            

                        </section>
        </>        
    )
}

export default CartProductPage;