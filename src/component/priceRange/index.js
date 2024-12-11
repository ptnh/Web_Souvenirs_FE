
import './style.scss';

import { useEffect, useState } from "react";

const PriceRange = ({setSelectedPrice}) => {

    // Hàm xử lý sự kiện khi người dùng thay đổi mức giá
    const handlePriceChange = (event) => {
        const selectedPrice = event.target.value;
        // Gọi hàm từ AllProduct để cập nhật mức giá đã chọn
        setSelectedPrice(selectedPrice);
    };

    return <>
        <div class="type-option-first">
            <section class="component-mini-select">
                <div class="title-mini-select">
                    <span>KHOẢNG GIÁ</span>
                </div>
            </section>
            <section class="component-select-first">
                <ul class="has-menu-select-first">
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="0-100000" onChange={handlePriceChange} /> Giá dưới 100.000đ
                        </label>
                    </li>
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="100000-200000"  onChange={handlePriceChange} /> 100.000đ - 200.000đ
                        </label>
                    </li>
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="200000-300000"  onChange={handlePriceChange} /> 200.000đ - 300.000đ
                        </label>
                    </li>
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="300000-500000"  onChange={handlePriceChange} /> 300.000đ - 500.000đ
                        </label>
                    </li>
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="500000-1000000"  onChange={handlePriceChange} /> 500.000đ - 1.000.000đ
                        </label>
                    </li>
                    <li class="sub-menu-select-first">
                        <label>
                            <input class="input-radio-select-first" type="radio" name="price-range" value="1000000-100000000"  onChange={handlePriceChange} /> Giá trên 1.000.000đ
                        </label>
                    </li>
                </ul>
            </section>
        </div>       
    </>
}

export default PriceRange;

