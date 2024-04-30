import Provenance from '@provenance/react-widgets'
import PageContent from './page-content'

const productIds = ['HS1', '1F2C']

export default function Home() {

  return (
    <main>
      <PageContent ids={productIds}>
        <Provenance ids={productIds} />
      </PageContent>
    </main>
  )
}
