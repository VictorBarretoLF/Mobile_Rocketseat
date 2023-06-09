import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputWithIcon } from "../InputWithIcon";
import { Todo } from "../../screens/Home";

type Props = {
	todos: Todo[];
};

export function TodosInfo({ todos }: Props) {
	const completedTodos = todos.filter((todo) => !todo.done).length;

	return (
		<View style={styles.container}>
			<View style={styles.itemsContainer}>
				<View>
					<Text style={{ ...styles.label, color: "#4EA8DE" }}>Criadas </Text>
				</View>
				<View style={styles.numberContainer}>
					<Text style={styles.numberContainerText}>{todos.length}</Text>
				</View>
			</View>
			<View style={styles.itemsContainer}>
				<Text style={{ ...styles.label, color: "#8284FA" }}>Concluidas </Text>
				<View style={styles.numberContainer}>
					<Text style={styles.numberContainerText}>{completedTodos}</Text>
				</View>
			</View>
		</View>
	);
}
