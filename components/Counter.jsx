import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const storage = new MMKVLoader().initialize();
function Counter() {
	// useMMKVStorage is like a React Hook, except that the persisted state is written in storage
	// at every change
	const [counter, setCounter] = useMMKVStorage('counter', storage, 0);

	function handleIncrease() {
		setCounter(counter + 1);
	}
	function handleDecrease() {
		setCounter(counter - 1);
	}

	return <View style={styles.counter}>
		<View style={styles.counterValue}>
			<Text style={{fontSize: 100, textAlign: 'center'}}>{counter}</Text>
		</View>
		<TouchableOpacity style={[styles.buttonBackground, styles.decreaseButtonColor]} onPress={handleDecrease}>
			<Text style={styles.buttonText}>−</Text>
		</TouchableOpacity>
		<TouchableOpacity style={[styles.buttonBackground, styles.increaseButtonColor]} onPress={handleIncrease}>
			<Text style={styles.buttonText}>+</Text>
		</TouchableOpacity>
	</View>

}

const styles = StyleSheet.create({
	counter: {
		width: 170,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	counterValue: {
		width: '100%',
		marginBottom: 100,
		justifyContent: 'center'
	},
	buttonBackground: {
		height: 70,
		aspectRatio: 1,
		borderRadius: '50%',
		borderColor: 'darkgrey',
		borderWidth: 2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		fontSize: 40,
		color: '#fff',
		fontWeight: 300,
	},
	increaseButtonColor: {
		backgroundColor: '#58d68d'
	},
	decreaseButtonColor: {
		backgroundColor: '#e74c3c'
	}
});

export default Counter;