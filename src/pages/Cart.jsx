import { motion } from 'framer-motion'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helment from '../components/Helment/Helment'
import CommonSection from '../components/UI/CommonSection'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../components/redux/silces/cartSlice'
import '../styles/Cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <Helment title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imgage</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Td item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-item-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>

                <p className="fs-6 mt-2">
                  taxes and shippint will calculate in checkout
                </p>

                <div className="buy__btn text-center">
                  <Link to="/checkout">Checkout</Link>
                </div>
                <div className="buy__btn mt-3 text-center">
                  <Link to="/shop">Continue Shopping</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helment>
  )
}

const Td = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct}>
        <i class="ri-delete-bin-line"></i>
      </motion.td>
    </tr>
  )
}

export default Cart
