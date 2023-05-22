import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Groups } from "./src/screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Groups />
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
