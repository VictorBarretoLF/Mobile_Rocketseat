import { useState } from "react";
import { Text, View } from "react-native";
import Botao from "../Botao";
import CampoInteiro from "../CampoInteiro";
import styles from "./styles";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function ItemCarrinho({ nome, preco, descricao, quantidade: quantidadeInicial }){
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return <>
        <View style={styles.informacao}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
        <View style={styles.carrinho}>
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
                        }).format(total)}
                    </Text>
                </View>
            </View>
            <Botao title="Remover do Carrinho" acao={() => console.log('acao')} />
        </View>
        <View style={styles.divisor} />
    </>
}