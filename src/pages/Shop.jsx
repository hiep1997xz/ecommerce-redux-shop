import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/data/products'
import Helment from '../components/Helment/Helment'
import CommonSection from '../components/UI/CommonSection'
import ProductsList from '../components/UI/ProductsList'
import '../styles/shop.css'

const Shop = () => {
  const [productData, setProductData] = useState(products)
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'sofa') {
      const filterProducts = products.filter((item) => item.category === 'sofa')
      setProductData(filterProducts)
    }
    if (filterValue === 'mobile') {
      const filterProducts = products.filter((item) => item.category === 'mobile')
      setProductData(filterProducts)
    }
    if (filterValue === 'chair') {
      const filterProducts = products.filter((item) => item.category === 'chair')
      setProductData(filterProducts)
    }
    if (filterValue === 'wireless') {
      const filterProducts = products.filter((item) => item.category === 'wireless')
      setProductData(filterProducts)
    }
    if (filterValue === 'watch') {
      const filterProducts = products.filter((item) => item.category === 'watch')
      setProductData(filterProducts)
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductData(searchedProducts)
  }

  return (
    <Helment title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Search......." onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center">No products are found!</h1>
            ) : (
              <ProductsList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helment>
  )
}

export default Shop
