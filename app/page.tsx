'use client'

import Provenance from '@provenance/react-widgets'
import PageContent from './page-content'
// import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const productIds = ['HS1', '1F2C']

export default function Home() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (newProductId: string) => {
    const params = new URLSearchParams(searchParams)

    params.set("productId", newProductId))

    replace(`${pathname}?${params.toString()}`)
  }

  const productId = searchParams.get("productId")?.toString()

  return (
    <main>
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

      <PageContent>
        <h1>This is a child of PageContent. Embeds below:</h1>
        { productId === 'HS1' && <Provenance.Embed uid="fb405L7e" productId="HS1" /> }
        { productId === '1F2C' && <Provenance.Embed uid="fb405L7e" productId="1F2C" /> }
      </PageContent>
    </main>
  )
}
