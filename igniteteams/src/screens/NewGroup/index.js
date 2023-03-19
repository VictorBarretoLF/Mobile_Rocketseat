// COMPONENTS
import { Header } from "../../components/Header";

import Fa, { FA5Style } from 'react-native-vector-icons/FontAwesome5'

import { Container, Content, Icon } from "./styles";
import { Highlight } from "../../components/Highlight";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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

                <Input 
                    placeholder="Nome do grupo"
                />

                <Button 
                    title="Criar"
                    style={{ marginTop : 20 }}
                />
            </Content>

        </Container>
    )
}