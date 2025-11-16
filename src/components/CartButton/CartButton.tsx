import type { FC } from 'react'
import { Link } from 'react-router-dom'
import './CartButton.css'

interface CartButtonProps {
  itemsCount: number
}

export const CartButton: FC<CartButtonProps> = ({ itemsCount }) => {
  return (
    <Link to="/fundsApplication/1" className="cart-button">
      <div className="cart-icon">
        <svg className="icon-list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
        {itemsCount > 0 && (
          <span className="cart-counter">{itemsCount}</span>
        )}
      </div>
    </Link>
  )
}