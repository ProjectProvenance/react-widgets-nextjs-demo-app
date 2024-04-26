import Provenance from './components/provenance'

export default async function Home() {
  return (
    <main>
      <Provenance ids={['HS1', '1F2C']} />
    </main>
  )
}
