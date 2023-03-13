// import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
// import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from 'react-native-safe-area-context';
// import styles from "./styles";

// COMPONENTS
import ItemCarrinho from '../../components/ItemCarrinho'

const carrinho = [
    {
      id: 1,
      nome: "Banho",
      preco: 79.9,
      descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
      quantidade: 1
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
      quantidade: 2
    },
    {
      id: 3,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
      quantidade: 1
    }
  ];

export default function Carrinho(){
    return  <SafeAreaView>
        <FlatList
            data={carrinho}
            renderItem={({item}) => <ItemCarrinho {...item}  />}
            keyExtractor={({id}) => String(id)}
        />
    </SafeAreaView>
}