import {
	Alert,
	FlatList,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
	const participants = [
		"Rodrigo",
		"vitória",
		"zé",
		"thiago",
		"joaso",
		"marcos",
		"john",
		"mike",
		"peter",
		"jeff",
	];

	function handleParticipantAdd() {
		if (participants.includes("Rodrigo")) {
			return Alert.alert(
				"Participante existe",
				"Já existe um participante na lista com esse nome."
			);
		}
	}

	function handleParticipantRemove(name: string) {
		Alert.alert("Remover", `Remover o participante ${name}?`, [
			{
				text: "Não",
				style: "cancel",
			},
			{
				text: "Sim",
				onPress: () => Alert.alert("Deletado!"),
			},
		]);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>

			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			{/* ScrollView is used when it is necessary to display a list of items which may exceed the screen size. */}
			{/* <ScrollView showsVerticalScrollIndicator={false}>
				{participants.map((participant) => (
					<Participant
						key={participant}
						name={participant}
						onRemove={() => handleParticipantRemove("Rodrigo")}
					/>
				))}
			</ScrollView> */}

			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant
						key={item}
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>
						Ninguém chegou no evento ainda? Adicione participantes a sua lista de
						presença.
					</Text>
				)}
			/>
		</View>
	);
}
