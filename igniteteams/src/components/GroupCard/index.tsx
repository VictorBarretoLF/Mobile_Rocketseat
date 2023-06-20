import { TouchableOpacityProps } from "react-native";
import { Container, GroupIcon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
};

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <GroupIcon />
            <Title>{title}</Title>
        </Container>
    );
}
