async function getProvData(ids: string[]) {
  const url = 'https://www.provenance.org/en/bundles/fb405L7e/embed/product/'
  const urls = ids.map(id => url + id)

  return await Promise.all(
    urls.map(async url => {
      const resp = await fetch(url)
      return resp.text()
    })
  )
}

export interface ProvenanceProps {
  ids: string[];
}

export default async function Provenance({ ids }: ProvenanceProps) {
  const prov = await getProvData(ids)

  return (
    <main>
      {prov.map((html, index) =>
        <div dangerouslySetInnerHTML={{ __html: html }} key={`prov-${index}`} />
      )}
      <script src="https://unpkg.com/@provenance/provenance-sdk@1/dist/provenance-sdk.js"></script>
    </main>
  )
}
