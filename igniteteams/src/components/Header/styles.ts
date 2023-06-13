import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

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

export const BackIcon = styled(Icon).attrs(({ theme }) => ({
    name: "left",
    size: 36,
    color: theme.COLORS.WHITE,
}))``;
