import React, { useState } from 'react'
import Nouislider from "nouislider-react";
import {useDispatch} from 'react-redux'
const Price = () => {
    const dispatch = useDispatch();
    const [percent, setPercent] = useState("299");
    const [values, setValues] = useState([299, 105999]);
    const onChangeSlide = async (data) => {
      let value = data?.map(Number);
      value = [...new Set(value)];
      setValues([value[0], value[1]]);
      setSelectshopFilter((selectshopFilter) => [
        ...selectshopFilter,
        value[0],
        value[1],
      ]);
    };
  return (
    <div className="filter-box">
    <div className="filter-header">
      <div className="filter-title">Price</div>
    </div>
    <div className="price-range">
      <Nouislider
        connect={true}
        range={{ min: 299, max: 105999 }}
        behaviour="drag"
        step={100}
        start={values}
        tooltips={true}
        
        onEnd={(data) => {
          onChangeSlide(data);
        }}
      />

      {percent && (
        <div className="price-text">
          <span>Price :</span> ₹ {values[0]} -{" "}
          ₹ {values[1]}
        </div>
      )}
      {/* <p>
        <span>₹{values[0]}</span> -<span> ₹{values[1]}</span>
      </p> */}
    </div>
  </div>
  )
}

export default Price