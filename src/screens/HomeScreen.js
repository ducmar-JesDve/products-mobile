import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { Card,Title } from 'react-native-paper';
import {fetchCategories} from '../services/categoryService';
import {syncProduct} from '../services/productService';
import {getLocalProducts, saveLocalProducts} from '../utils/storage';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import SyncButton from '../components/SyncButton';

const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchCategories().then(setCategories);
        getLocalProducts().then(setProducts);
    }, []);

    const handleAddProduct = async (newProduct) => {
        if (!newProduct.name || !newProduct.category_id) return;

        const product = {...newProduct, id: Date.now(), synced: false};
        const updatedProducts = [...products, product];

        try {
            await saveLocalProducts(updatedProducts);
            setProducts(updatedProducts);
        } catch (error) {
            console.error('Error al guardar el producto localmente:', error);
        }
    };

    const handleSync = async () => {
        try{
            const unsyncedProducts = products.filter((p) => !p.synced);
            for(const product of unsyncedProducts){
                await syncProduct(product);
                product.synced = true;
            }
            await saveLocalProducts(unsyncedProducts);
            setProducts(unsyncedProducts);
        }catch(error){
            console.error('Error al sincronizar productos:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Agregar producto</Title>
                    <ProductForm categories={categories} onSubmit={handleAddProduct} />
                    <SyncButton onSync={handleSync} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Lista de productos</Title>
                    <ProductList products={products} categories={categories}/>
                </Card.Content>
            </Card>
            
        </View>
    );

};

const styles = StyleSheet.create({
    container:{padding:20},
    card:{marginBottom:20},
    title:{fontSize:24, marginBottom:10},
});

export default HomeScreen;