import { BackIcon, Container, Logo, BackButton } from "./styles";
import logoImg from "../../assets/logo.png";

export function Header({ showBackButton = false }) {
    return (
        <Container>
            {showBackButton && (
                <BackButton>
                    <BackIcon />
                </BackButton>
            )}

            <Logo source={logoImg} />
        </Container>
    );
}
