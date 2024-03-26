import {View, Text } from 'react-native';

import styles from './mensagem';

import styles from './styles';
import Mensagem from './mensagem';

function Exemplo_2 () {
    return(
        <View style={styles.container}>

            <View style={styles.viewmensagem}>
             
                <Mensagem/>

            </View>

        </View>
    )
}

export default Exemplo_2;