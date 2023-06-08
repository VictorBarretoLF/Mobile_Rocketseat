import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
	},
	header: {
		height: 173,
		backgroundColor: "transparent",
	},
	content: {
		flex: 1,
		backgroundColor: "#1A1A1A",
		paddingHorizontal: 24,
	},
	input: {
		flex: 1,
		height: 54,
		backgroundColor: "#262626",
		color: "#F2F2F2",
		borderRadius: 6,
		padding: 16,
		fontSize: 16,
		marginRight: 4,
	},
	addNew: {
		width: 52,
		height: 52,
		borderRadius: 5,
		backgroundColor: "#1E6F9F",
		alignItems: "center",
		justifyContent: "center",
	},
	form: {
		width: "100%",
		flexDirection: "row",
		marginTop: -27,
	},
});
