"use client"

import { useState } from 'react'

export default function PageContent({ ids, children }) {
  const [sku, setSku] = useState(ids[0])

  return (
    <>
      <label htmlFor="sku">
        Select SKU:
        <select
          id="sku"
          value={sku}
          onChange={e => setSku(e.target.value)}
        >
          {ids.map(id =>
            <option key={id} value={id}>{id}</option>
          )}
        </select>
      </label>
      {children}
    </>
  )
}
