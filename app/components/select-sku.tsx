'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const productIds = ['HS1', '1F2C']

export default function SelectSku () {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (newProductId: string) => {
    const params = new URLSearchParams(searchParams)

    params.set("productId", newProductId)

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <label htmlFor="sku">
      Select SKU:
      <select
        id="sku"
        defaultValue="HS1"
        onChange={e => handleChange(e.target.value)}
      >
        {productIds.map(id =>
          <option key={id} value={id}>{id}</option>
        )}
      </select>
    </label>
  )
}
