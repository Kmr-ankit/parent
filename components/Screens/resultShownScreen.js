import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Yelp from "../api/Yelp";
export default function ResultShownScreen({ route, navigation }) {
  const [result, setResult] = useState(null);
  const id = route.params.itemId;

  async function getResult(id) {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  }
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) return null;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={(element) => {
          return <Image style={styles.image} source={{ uri: element.item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
