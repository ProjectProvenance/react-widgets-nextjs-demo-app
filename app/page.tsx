import Provenance from '@provenance/react-widgets'

export default async function Home() {
  return (
    <main>
      <Provenance ids={['HS1', '1F2C']} />
    </main>
  )
}
