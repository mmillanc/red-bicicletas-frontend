import { useEffect, useState } from 'react';
import { getBicicletas } from '../services/api';
import BicicletaMap from '../components/bicicletas/BicicletaMap';

export default function Bicicletas() {
  const [bicicletas, setBicicletas] = useState([]);

  useEffect(() => {
    getBicicletas().then(setBicicletas);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Red de Bicicletas</h1>

      <BicicletaMap bicicletas={bicicletas} />

      <ul className="grid md:grid-cols-3 gap-4">
        {bicicletas.map(b => (
          <li key={b._id} className="border p-4 rounded">
            <h2 className="font-semibold">{b.nombre}</h2>
            <p>{b.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
