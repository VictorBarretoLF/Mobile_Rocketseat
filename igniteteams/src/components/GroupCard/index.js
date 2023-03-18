import { Container, Icon, Title } from "./styles";

export function GroupCard({ title, ...rest }) {
    return (
      <Container {...rest}>
        <Icon />
        <Title>
            {title}
        </Title>

      </Container>
    )
}