import React, { Fragment } from 'react'
import Counter from '../components/counter/Counter'

export const Home: React.FC = () => {
  return (
    <Fragment>
      <h1>Product</h1>
      <div style={{ display: 'flex' }}>
        <Counter />
        <Counter />
      </div>
    </Fragment>
  )
}
