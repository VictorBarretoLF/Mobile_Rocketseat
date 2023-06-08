import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { InputWithIcon } from "../../components/InputWithIcon";
// import Logo from "../../assets/Logo.png";

export function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={require("../../assets/Logo.png")} />
			</View>
			<View style={styles.content}>
				<InputWithIcon />
			</View>
		</View>
	);
}
