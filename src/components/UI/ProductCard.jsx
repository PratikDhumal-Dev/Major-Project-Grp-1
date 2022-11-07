import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";

import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "./../../redux/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
        avgRating: item.avgRating,
      })
    );

    toast.success("Product added successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div>
          <motion.img
            className="product__img"
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt=""
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
          <div>
            <div>
              <span>
                <i class="ri-star-fill"></i>
              </span>
              <span>
                <i class="ri-star-fill"></i>
              </span>
              <span>
                <i class="ri-star-fill"></i>
              </span>
              <span>
                <i class="ri-star-fill"></i>
              </span>
              <span>
                <i class="ri-star-half-line"></i>
              </span>
            </div>

            <span>{item.avgRating} Ratings</span>
          </div>
        </div>
        <div className="product__card-bottom d-flex align-item-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
