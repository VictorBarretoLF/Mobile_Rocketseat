import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

// SCREENS
import { Groups } from "./src/screens/Groups";
import { NewGroup } from "./src/screens/NewGroup";

// THEME
import theme from "./src/theme";

// FONTS
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { Players } from "./src/screens/Players";

import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
