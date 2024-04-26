async function getProvData() {
  const res = await fetch('https://www.provenance.org/en/bundles/fb405L7e/embed/product/HS1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Prov data')
  }

  return res.text()
}

export default async function Home() {
  const prov = await getProvData()

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: prov }} />
      <script src="https://unpkg.com/@provenance/provenance-sdk@1/dist/provenance-sdk.js"></script>
    </main>
  );
}
