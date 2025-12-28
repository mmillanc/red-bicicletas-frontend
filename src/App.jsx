import { useEffect, useState } from 'react'
import { getBicicletas } from './services/api'
import BicicletaMap from './components/bicicletas/BicicletaMap'

export default function App() {
  const [bicicletas, setBicicletas] = useState([])

  useEffect(() => {
    getBicicletas().then(setBicicletas)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          🚲 Red de Bicicletas
        </h1>
      </header>

      <main className="p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Mapa de bicicletas
          </h2>
          <BicicletaMap bicicletas={bicicletas} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Listado
          </h2>
          <ul className="grid md:grid-cols-3 gap-4">
            {bicicletas.map(b => (
              <li
                key={b._id}
                className="bg-white p-4 rounded shadow"
              >
                <h3 className="font-semibold">{b.nombre}</h3>
                <p className="text-sm text-gray-600">
                  {b.descripcion}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
