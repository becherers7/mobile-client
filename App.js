import React from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  SafeAreaView
} from "react-native";

export default function App() {
  const handlePress = text => {
    console.log({ text });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => handlePress("Text pressed.")}>
        The Dark Ravens Will Fly.
      </Text>
      <TouchableWithoutFeedback onPress={() => handlePress("Image pressed.")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}
        />
      </TouchableWithoutFeedback>
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("Title", "Message", [
            {
              text: "Yes",
              onPress: () => handlePress("Selected yes")
            },
            {
              text: "No",
              onPress: () => handlePress("Selected no")
            }
          ])
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
