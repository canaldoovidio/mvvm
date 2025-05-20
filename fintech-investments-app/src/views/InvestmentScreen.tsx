import { View, Text, Button, FlatList } from "react-native";
import { useInvestmentViewModel } from "../viewmodels/InvestmentViewModel";
import InvestmentCard from "../components/InvestmentCard";

export default function InvestmentScreen() {
  const { investments, filterByRisk } = useInvestmentViewModel();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Recomendações</Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Button title="Todos" onPress={() => filterByRisk("Todos")} />
        <Button title="Baixo" onPress={() => filterByRisk("Baixo")} />
        <Button title="Médio" onPress={() => filterByRisk("Médio")} />
        <Button title="Alto" onPress={() => filterByRisk("Alto")} />
      </View>
      <FlatList
        data={investments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InvestmentCard item={item} />}
      />
    </View>
  );
}