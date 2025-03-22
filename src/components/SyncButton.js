import React  from "react";
import { Button } from "react-native-paper";

const SyncButton = ({ onSync }) => {
    return(
        <Button mode='contained' onPress={onSync} style={styles.button}>Sincronizar</Button>
    );
};

const styles = {
    button:{marginTop:10}
};

export default SyncButton;