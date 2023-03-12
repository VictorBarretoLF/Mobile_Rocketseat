import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";

// COMPONENTS
import Item from "../../components/Item";

const servicos = [
    {
      id: 1,
      nome: "Banho",
      preco: 79.9,
      descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos."
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
      id: 3,
      nome: "Vacina Antirrábica",
      preco: 99.9,
      descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
    }
  ];

export default function Servicos(){
    return  <SafeAreaView style={styles.preencher}>
      {/* https://reactnative.dev/docs/keyboardavoidingview */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.preencher}
      >
        <FlatList 
          // Set the "data" prop to the "servicos" array
          data={servicos}
          // Set the "renderItem" prop to a function that returns a rendered "Item" component for each item in the array
          renderItem={({ item }) => <Item {...item} />}
          // Set the "keyExtractor" prop to a function that extracts the "id" property from each item and returns it as a string to be used as the key prop of each rendered "Item" component
          keyExtractor={item => String(item.id)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
}