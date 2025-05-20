import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import InvestmentScreen from "./src/views/InvestmentScreen"; // ajuste o caminho se necessário

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InvestmentScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
