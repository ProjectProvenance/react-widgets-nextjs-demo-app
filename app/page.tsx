import Provenance from '@provenance/react-widgets'
import PageContent from './page-content'
import SelectSku from './components/select-sku'

export default function Home({
  searchParams,
}: {
  searchParams?: {
    productId?: string;
  };
}) {
  const productId = searchParams?.productId || ""

  return (
    <main>
      <SelectSku />

      <PageContent>
        <h1>This is a child of PageContent. Embeds below:</h1>
        { productId === 'HS1' && <Provenance.Embed uid="fb405L7e" productId="HS1" /> }
        { productId === '1F2C' && <Provenance.Embed uid="fb405L7e" productId="1F2C" /> }
      </PageContent>
    </main>
  )
}
