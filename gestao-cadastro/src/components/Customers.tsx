import React from 'react'
import { customers } from "../data/customers";

const Home: React.FC = () => {

  return (
    <div className="container">
      <section>
        {
          customers.map(customer => (
            <div className="customer-card" key={customer.id}>
              <h3>{customer.name}</h3>
              <span>{customer.address}</span>
              <span>{`${customer.city}-${customer.state}`}</span>
              <span>{customer.cep}</span>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Home