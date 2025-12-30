import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getBicicletas = () => api.get('/bicicletas')



/*
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function getBicicletas() {
  const res = await fetch(`${API_URL}/api/bicicletas`);
  return res.json();
}

export async function createBicicleta(data) {
  const res = await fetch(`${API_URL}/api/bicicletas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBicicleta(id) {
  return fetch(`${API_URL}/api/bicicletas/${id}`, {
    method: 'DELETE',
  });
}
*/