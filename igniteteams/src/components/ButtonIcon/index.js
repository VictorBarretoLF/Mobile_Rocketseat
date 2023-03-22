import { TouchableOpacityProps } from "react-native";

import { Container, Icon } from "./styles";

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }) {
    return (
        <Container {...rest}>
            <Icon         
                name={icon}
                type={type}  
            />
        </Container>
    );
}
