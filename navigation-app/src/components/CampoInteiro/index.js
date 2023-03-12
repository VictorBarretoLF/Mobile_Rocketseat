import { TextInput } from "react-native";
import styles from "./styles";

export default function CampoInteiro({valor, acao, propsStyles}){
    const updateValue = (novoValor, callback) => {
        const isInteger = novoValor.match(/^[0-9]*$/);

        if (!isInteger) return;

        const removeLeftZero = novoValor.replace(/^(0)(.+)/, '$2');

        callback(removeLeftZero);
    }

    const numberToString = String(valor);

    return <TextInput
        style={[styles.campo, propsStyles]}
        value={numberToString} 
        keyboardType="number-pad"
        onChangeText={(value) => updateValue(value, acao)}
        selectTextOnFocus
    />
}