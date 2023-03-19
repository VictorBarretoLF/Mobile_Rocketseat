import styled from "styled-components/native";
import MeterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Icon = styled(MeterialIcon).attrs(({ theme }) => ({
    size: 50,
    color: theme.COLORS.GREEN_700,
    name: "account-group-outline",
}))`
    align-self: center;
`;