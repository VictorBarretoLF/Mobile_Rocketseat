import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Imput";

export function NewGroup() {
	return (
		<Container>
			<Header showBackButton />

			<Content>
				<Icon />

				<Highlight title="Nova turma" subtitle="crie a turma para adcionar as pessoas" />

				<Input placeholder="Nome da turma" />

				<Button title="Criar" />
			</Content>
		</Container>
	);
}
