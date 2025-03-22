import api from "./api";

export const fetchCategories = async () => {
    try {
        const response = await api.get('/api/categories');
        return response.data;
    } catch (error) {
        console.error('Error al obtener categorías:', error);
        throw error;
    }
};