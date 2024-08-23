import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },

  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
