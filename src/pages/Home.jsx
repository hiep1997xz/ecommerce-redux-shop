import { motion } from 'framer-motion'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/data/products'
import heroImg from '../assets/images/hero-img.png'
import Helment from '../components/Helment/Helment'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import counterImg from '../assets/images/counter-timer-img.png'
import Services from '../components/services/Services'
import Clock from '../components/UI/Clock'
import ProductsList from '../components/UI/ProductsList'
import '../styles/Home.css'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    )
    const filteredSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    )
    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
    )
    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    )
    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    )

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  }, [])

  return (
    <Helment title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Instead, it will copy all the configuration files and the
                  transitive dependencies (webpack, Babel, ESLint, etc) right
                  into your project so you have full control over them. All of
                  the commands except eject will still work, but they will point
                  to the copied scripts so you can tweak them. At this point
                  you're on your own.
                </p>
                <motion.button whileTap={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Product</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className='count__down-col'>
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>

    </Helment>
  )
}

export default Home
