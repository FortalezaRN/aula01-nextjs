import { AddToCartButton } from '@/app/components/add-to-cart-button'
import { TestSeverSide } from '@/app/components/test-server-side'

interface DetailsProps {
  params: {
    details: string[]
  }
}

export default async function Product({ params }: DetailsProps) {
  const response = await fetch('https://api.github.com/users/fortalezarn')
  const user = await response.json()

  const [productId, size, color] = params.details
  return (
    <div>
      <p>Id: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <AddToCartButton>
        <TestSeverSide></TestSeverSide>
      </AddToCartButton>
    </div>
  )
}
