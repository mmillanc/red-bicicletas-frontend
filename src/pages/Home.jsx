import MapView from '../components/MapView'

export default function Home() {
  return (
    <>
      <header className="bg-black text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Red de Bicicletas</h1>
        <p>Mapa de bicicletas urbanas</p>
      </header>

      <section className="p-6">
        <MapView />
      </section>
    </>
  )
}
