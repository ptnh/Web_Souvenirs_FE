
import './style.scss';

import { useEffect, useState } from "react";

const OptionColor = () => {

    return <>
        
        <div class="type-option-first">
                    <section class="component-mini-select">
                        <div class="title-mini-select">
                            <span>MÀU SẮC</span>
                        </div>
                    </section>
                    <section class="component-select-first">
                        <ul class="has-menu-button-select-first">
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first btn-pink"></button></li>
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first btn-red"></button></li>
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first btn-yellow"></button></li>
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first btn-green"></button></li>
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first btn-white"></button></li>
                            <li class="sub-menu-button-select-first"><button class="button-radio-select-first"></button></li>
                        </ul>
                    </section>
                </div>
    </>
}

export default OptionColor;

