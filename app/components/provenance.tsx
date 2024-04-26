async function getProvData() {
  const skus = ['HS1', '1F2C']
  const url = 'https://www.provenance.org/en/bundles/fb405L7e/embed/product/'
  const urls = skus.map(sku => url + sku)

  return await Promise.all(
    urls.map(async url => {
      const resp = await fetch(url)
      return resp.text()
    })
  )
}

export default async function Provenance() {
  const prov = await getProvData()

  return (
    <main>
      {prov.map((html, index) =>
        <div dangerouslySetInnerHTML={{ __html: html }} key={`prov-${index}`} />
      )}
      <script src="https://unpkg.com/@provenance/provenance-sdk@1/dist/provenance-sdk.js"></script>
    </main>
  )
}
