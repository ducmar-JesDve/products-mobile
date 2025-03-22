import React,{useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importar el componente Picker

const ProductForm = ({categories, onSubmit}) => {
    const [newProduct, setNewProduct] = useState({name: '', category_id: ''});
    const handleSubmit = () => {
        onSubmit(newProduct);
        setNewProduct({name: '', category_id: ''});
    };
    return(
        <View>
            <TextInput
                label="Nombre del producto"
                value={newProduct.name}
                onChangeText={(text) => setNewProduct({...newProduct, name: text})}
                atyle={styles.input}
                mode='outlined'
            />
            <Picker
                selectedValue={newProduct.category_id}
                onValueChange={(itemValue) => setNewProduct({...newProduct, category_id: itemValue})}
                style={styles.input}
            >
                <Picker.Item label="Selecciona una categoría" value=""/>
                {categories.map((category) => (
                    <Picker.Item key={category.id} label={category.name} value={category.id}/>
                ))}
            </Picker>
            <Button mode='contained' onPress={handleSubmit} style={styles.button}>Registrar</Button>
        </View>
    );
    
};

const styles = StyleSheet.create({
    input:{marginBottom: 10},
    picker:{borderWidth:1,borderColor:'#ccc',marginBottom:10,borderRadius:4},
    button:{marginTop:10}
});

export default ProductForm;