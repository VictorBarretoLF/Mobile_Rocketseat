import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/MaterialIcons'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_700,
    name: "groups",
}))`
    margin-right: 20px;
`;