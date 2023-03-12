import { useState } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import Botao from "../Botao";
import CampoInteiro from "../CampoInteiro";
import styles from "./styles";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function Item({ nome, preco, descricao }){
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }

    return <>
        <TouchableOpacity style={styles.informacao} onPress={inverteExpandir} >
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </TouchableOpacity>
        {
        expandir && <View style={styles.carrinho}>
            <View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Quantidade:</Text>
                    <CampoInteiro 
                        propsStyles={styles.quantidade}
                        valor={quantidade} 
                        acao={atualizaQuantidadeTotal} 
                    />
                </View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Total:</Text>
                    <Text style={styles.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }</Text>
                </View>
            </View>
            <Botao title="Adicionar ao Carrinho" acao={() => console.log('acao')} />
        </View>
        }
        <View style={styles.divisor} />
    </>
}