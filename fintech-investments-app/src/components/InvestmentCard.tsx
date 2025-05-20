import { View, Text, StyleSheet } from "react-native";
import { Investment } from "../models/Investment";

interface Props {
  item: Investment;
}

export default function InvestmentCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.tipo}</Text>
      <Text>Risco: {item.risco}</Text>
      <Text>Retorno: {item.retorno}</Text>
      <Text>{item.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    margin: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});