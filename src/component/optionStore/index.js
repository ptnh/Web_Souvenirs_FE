
import './style.scss';

import { useEffect, useState } from "react";

const OptionStore = ({setSelectedStore}) => {

    // Hàm xử lý sự kiện khi người dùng thay đổi nhãn hàng
    const handleStoreChange = (event) => {
        const selectedStore = event.target.value;
        // Gọi hàm từ AllProduct để cập nhật nhãn hàng đã chọn
        setSelectedStore(selectedStore);
    };
    const [stam, setStam] = useState('hhhh');
    const [listStores, setListStores] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:8181/business_api/product_api/read.php`)
          .then((response) => response.json())
          .then((data) => {
            const uniqueStores = [...new Set(data.map(item => item.store_product))];
            setListStores(uniqueStores);
            
            console.log(data);
            console.log(listStores);
          });
      },[stam]);

    return <>
            <div class="type-option-first">
                    <section class="component-mini-select">
                        <div class="title-mini-select">
                            <span>THƯƠNG HIỆU</span>
                        </div>
                    </section>
                    <section class="component-select-first">
                        <ul class="has-menu-select-first">
                          
                        {listStores.map((item, key) => (
                            <li class="sub-menu-select-first" key={key}>
                                <label>
                                    <input class="input-radio-select-first" type="radio" name="brand" value={item} onChange={handleStoreChange} /> {item}
                                </label>
                            </li>
                        ))}


            
                        </ul>
                    </section>
                </div>  
    </>
}

export default OptionStore;

