import { TouchableOpacity, Text } from "react-native";
import funcaoEstilosPadrao from './styles'

export default function Botao({pequeno = false, invertido = false, title, acao, propsStyles}) {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

  return (
    <TouchableOpacity style={[estilosPadrao.botao, propsStyles]} onPress={acao}>
      <Text style={estilosPadrao.title}>{title}</Text>
    </TouchableOpacity>
  );
  }
  