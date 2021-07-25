import React from 'react'
import { useState } from 'react'
import Products from '../../components/Products'
import Customers from "../../components/Customers";
import { Container } from './style'

const Home: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false)

  return (
    <Container>
      <h1> GESTÃO DE CADASTROS </h1>
      <button onClick={() => setShowProducts(true)}> Produtos </button>
      <button onClick={() => setShowProducts(false)}> Clientes </button>
      { showProducts ? <Products/> : <Customers/>}
    </Container>
  )
}

export default Home