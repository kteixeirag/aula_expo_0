import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo_2 from './components/exemplo_2';
import Exemplo_0 from './components/exemplo_1';

import Atividade1 from './components/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_2 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
