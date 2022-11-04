import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetails from "./resultsDetails";
export default function ResultsList({ title, results, navigation }) {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={(element) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("results", { itemId: element.item.id })
              }
            >
              <ResultsDetails result={element.item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
