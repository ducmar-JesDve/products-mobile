import React from 'react';
import { FlatList } from 'react-native' ;
import { Paragraph } from 'react-native-paper';

const ProductList =({products, categories})=>{
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Paragraph style={styles.productItem}>
                    {item.name} (Categoria:{categories.find((cat)=>cat.id===item.category_id)?.name||'Desconocida'}){''}
                    {item.synced ? ' (Sincronizado)' : ' (No sincronizado)'}

                </Paragraph>
            )}      
        />  
    );
};

const styles = {
    productItem: {marginTop: 5}
};

export default ProductList;