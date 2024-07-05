'use client'

import { ReactNode, useState } from 'react'

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao Carrinho ({count})</button>
      {children}
    </div>
  )
}
