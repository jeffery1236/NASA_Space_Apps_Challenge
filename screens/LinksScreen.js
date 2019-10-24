import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Image
        style={styles.image}
        source={require("../assets/images/plot.png")}
        resizeMode="stretch"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Acetylene (systematic name: ethyne) is the chemical compound with the
          formula C2H2. It is a hydrocarbon and the simplest alkyne. This
          colorless gas is widely used as a fuel and a chemical building block.
        </Text>
        <Text style={styles.text}>
          The graph above plots the altitude where C2H2 is measurement against
          its concentration at the particular location. The graph shows that as
          the altitude (km) increases the concentration of the gas C2H2 (parts
          per milllion) will decrease
        </Text>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Information on Gas"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#000000"
  },
  image: {
    flex: 1,
    height: 200,
    width: 410
  },
  textContainer: {
    marginTop: 50
  },
  text: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 15,
    padding: 5
  }
});
