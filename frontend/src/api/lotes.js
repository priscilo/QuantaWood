import axios from 'axios';

const API_URL = 'http://localhost:3000/lotes';

export async function obtenerLotes() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener lotes:', error);
        return [];
    }
}