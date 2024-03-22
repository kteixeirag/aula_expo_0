import {View, Text } from 'react-native';

import styles from './styles';

function Exemplo_2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo_2</Text>

            <View style={styles.viewmensagem}>
                <Text style={styles.mensagem}>visão beicin</Text>
            </View>

        </View>
    )
}

export default Exemplo_2;