import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
			<Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: 'lightgrey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
