import AsyncStorage from "@react-native-async-storage/async-storage";   

export const getLocalProducts = async () => {
    try{
        const localProducts = await AsyncStorage.getItem('products');
        return localProducts ? JSON.parse(localProducts) : [];
    }catch(error){
        console.error('Error al obtener productos locales:', error);
        throw error;
    }
};

export const saveLocalProducts = async (products) => {
    try{
        await AsyncStorage.setItem('products', JSON.stringify(products));
    }catch(error){
        console.error('Error al guardar productos locales:', error);
        throw error;
    }
};
