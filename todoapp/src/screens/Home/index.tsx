import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputWithIcon } from "../../components/InputWithIcon";

export function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.header}></View>
			<View style={styles.content}>
				<InputWithIcon />
			</View>
		</View>
	);
}
