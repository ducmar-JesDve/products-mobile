import api from "./api";

export const syncProduct = async (product) => {
    try{
        const response = await api.post('api/products',{name:product.name,category_id:product.category_id});
        return response.data;
    }catch(error){
        console.error('Error al sincronizar producto:', error);
        throw error;
    }   
};