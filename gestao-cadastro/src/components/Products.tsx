import React from 'react'
import { Product } from "../utils/intefaces";
import { products } from "../data/products";

const Products: React.FC = () => {

  const addToCart = (product: Product) => {
    const productFromStore = JSON.stringify(product)
    localStorage.setItem(`@${product.id}`, productFromStore)
  }

  return (
    <div className="container">
      <section>
        {
          products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.imgUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <span>{product.description}</span>
              <h4>{product.price}</h4>
              <button onClick={() => addToCart(product)}> Adicionar ao Carrinho </button>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Products