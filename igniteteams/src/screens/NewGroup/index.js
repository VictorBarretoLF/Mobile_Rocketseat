// COMPONENTS
import { Header } from "../../components/Header";

import Fa, { FA5Style } from 'react-native-vector-icons/FontAwesome5'

import { Container, Content, Icon } from "./styles";
import { Highlight } from "../../components/Highlight";
import { Button } from "../../components/Button";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Highlight 
                    title="Novo grupo"
                    subtitle="cire o grupo para adicionar as pessoas"
                />

                <Button 
                    title="Criar"
                />
            </Content>

        </Container>
    )
}