import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleProps } from './styles';

export function Filter({ title, isActive = false, ...rest }) {
    return (
        <Container isActive={isActive} {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    );
  }