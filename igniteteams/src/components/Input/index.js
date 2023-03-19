import { Container } from "./styles";
import { useTheme } from "styled-components";

export function Input({ ...rest }) {
    const { COLORS } = useTheme();

    return (
        <Container 
            placeholderTextColor={COLORS.GRAY_300}
            {...rest} 
        />
    )
}