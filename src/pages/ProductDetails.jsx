import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import products from "./../assets/data/products";
import Helmet from "./../components/Helmet/Helmet";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "./../redux/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";

function ProductDetails() {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        price,
        image: imgUrl,
      })
    );

    toast.success("Product added successfully");
  };
  return (
    <Helmet>
      <CommonSection />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" className="productDetailImg">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-item-center gap-5 mb-3">
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
                  <p>
                    (<span>{avgRating}</span> Ratings)
                  </p>
                </div>
                <div className="d-flex align-item-center gap-5">
                  <span className="product__price">${price}</span>
                  <p>Category: {category}</p>
                </div>
                <p className="mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div class="tab__wrapper d-flex align-item-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab-content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper mt-5">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
