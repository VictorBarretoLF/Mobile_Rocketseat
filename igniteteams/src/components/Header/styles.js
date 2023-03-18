import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(Ionicons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.WHITE,
    name: "chevron-back-outline"
}))``;
