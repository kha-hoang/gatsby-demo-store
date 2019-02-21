import React, { useContext } from 'react'

import { CartContext } from '../components/CartContext'
import CartItem from './CartItem'

export default function CartItemList({ items, meta, removeFromCart }) {
  if (!items || !meta) return <p>Your cart is empty</p>

  return (
    <div className="my-6">
      {items.map(item => (
        <CartItem key={item.id} removeFromCart={removeFromCart} {...item} />
      ))}
    </div>
  )
}