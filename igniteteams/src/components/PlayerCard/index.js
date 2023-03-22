import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "../ButtonIcon";

export function PlayerCard({ name, onRemove }) {
	return (
		<Container>
			<Icon name="person" />

			<Name>{name}</Name>

			<ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
		</Container>
	);
}
