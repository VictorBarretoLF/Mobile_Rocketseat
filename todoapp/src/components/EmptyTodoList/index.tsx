import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require("../../assets/Clipboard.png")} />
			</View>
			<Text style={[styles.emptyListDesc]}>Você ainda não tem tarefas cadastradas</Text>
			<Text style={styles.emptyListDesc}>Crie tarefas e organize seus itens a fazer</Text>
		</View>
	);
}
