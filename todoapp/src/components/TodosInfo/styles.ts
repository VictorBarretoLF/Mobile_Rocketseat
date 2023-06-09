import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 20,
		borderBottomWidth: 2,
		borderColor: "#333333",
	},
	itemsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
	},
	numberContainer: {
		width: 25,
		height: 19,
		backgroundColor: "#333333",
		borderRadius: 999,
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		fontSize: 14,
		fontWeight: "700",
	},
	numberContainerText: {
		color: "#D9D9D9",
	},
});
