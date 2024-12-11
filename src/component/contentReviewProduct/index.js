import './style.scss';

import { useEffect, useState } from "react";

import { FaEye, FaOpencart } from "react-icons/fa";

const ContentReviewProduct = ({topic, purpose}) => {
    return <>
        <div className="color-product">
            <h4 className="topic-review">{topic}:</h4>
            <p className="purpose-review">{purpose}.</p>
        </div>
    </>    
}

export default ContentReviewProduct;