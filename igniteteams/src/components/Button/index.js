import { Container, Title } from "./styles";

export function Button({ title, type = "PRIMARY", ...rest}) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}