import { useEffect, useRef } from 'react'
import L from 'leaflet'

export default function MapView() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = L.map('map').setView([-33.45, -70.66], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(mapRef.current)

    fetch('http://localhost:3000/api/bicicletas')
    .then(res => res.json())
    .then(data => {
      data.forEach(bici => {
        L.marker([bici.lat, bici.lng], {
          title: bici.modelo
        }).addTo(mapRef.current)
      })
    })

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div id="map" style={{ height: '400px' }} />
}
