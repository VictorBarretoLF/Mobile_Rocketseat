import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputWithIcon } from "../../components/InputWithIcon";
import { TodosInfo } from "../../components/TodosInfo";
import { useState } from "react";
import uuid from "react-native-uuid";
import { EmptyTodoList } from "../../components/EmptyTodoList";

export type Todo = {
	uuid: string;
	title: string;
	done: boolean;
};

const DEFAULT_TODO: Todo = { uuid: "", title: "", done: false };

export function Home() {
	const [todos, setTodos] = useState<Todo[]>([]);

	function createTodo(title: string) {
		const newTodo: Todo = {
			uuid: uuid.v4().toLocaleString(),
			title: title.trim(),
			done: false,
		};
		setTodos((prevState) => [...prevState, newTodo]);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require("../../assets/Logo.png")} />
			</View>
			<View style={styles.content}>
				<InputWithIcon createTodo={createTodo} />

				{/* TODO CONTAINER */}
				<TodosInfo todos={todos} />

				{/* TODO List */}
				<FlatList
					data={todos}
					keyExtractor={(key) => key.uuid}
					renderItem={({ item }) => (
						<View key={item.uuid} style={{ backgroundColor: "red" }}>
							<Text style={{ color: "#fff" }}>{item.title}</Text>
						</View>
					)}
					ListEmptyComponent={() => <EmptyTodoList />}
				/>
			</View>
		</View>
	);
}
