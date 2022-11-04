import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../resultsList";
export default function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>we found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="bit pricer"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big splender"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
