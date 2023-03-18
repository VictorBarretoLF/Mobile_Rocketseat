import { Container, Subtitle, Title } from "./styles";

export function Highlight({title, subtitle}) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
  
            <Subtitle>
                {subtitle}
            </Subtitle>
      </Container>
    );
}
