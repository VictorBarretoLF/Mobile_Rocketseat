import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function InputWithIcon() {
	const [isFocused, setFocus] = useState<boolean>(false);
	const [todo, setTodo] = useState<string>("");

	function onPressHandler() {
		Keyboard.dismiss();
		setTodo("");
		setFocus(false);
	}

	return (
		<View style={styles.form}>
			<TextInput
				style={
					!isFocused
						? styles.input
						: { ...styles.input, borderColor: "#5E60CE", borderWidth: 1 }
				}
				placeholder="Adicione uma nova tarefa"
				placeholderTextColor="#808080"
				onChangeText={setTodo}
				value={todo}
				onFocus={() => setFocus(true)}
			/>

			<TouchableOpacity style={styles.addNew} onPress={onPressHandler}>
				<Text>+</Text>
			</TouchableOpacity>
		</View>
	);
}
