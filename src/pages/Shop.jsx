import React, { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "./../assets/data/products";
import ProductList from "../components/UI/ProductList";
function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "painting") {
      const filteredProducts = products.filter(
        (item) => item.category === "painting"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "VFX") {
      const filteredProducts = products.filter(
        (item) => item.category === "VFX"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Design") {
      const filteredProducts = products.filter(
        (item) => item.category === "Design"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Photography") {
      const filteredProducts = products.filter(
        (item) => item.category === "Photography"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Dance") {
      const filteredProducts = products.filter(
        (item) => item.category === "Dance "
      );
      setProductsData(filteredProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Courses" />
      <section>
        <Container className="">
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="painting">Painting</option>
                  <option value="VFX">VFX</option>
                  <option value="Design">Design</option>
                  <option value="Photography">Photography</option>
                  <option value="Dance">Dance</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search "
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Product Found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
