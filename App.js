import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./components/Screens/SearchScreen";
import ResultShownScreen from "./components/Screens/resultShownScreen";
const Stack = createNativeStackNavigator();

function BusinessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SearchScreen navigation={navigation} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Business Search" component={BusinessScreen} />
        <Stack.Screen name="results" component={ResultShownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
