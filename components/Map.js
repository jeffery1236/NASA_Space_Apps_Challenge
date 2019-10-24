import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import mapStyle from "../assets/styles/mapStyle.js";

const Map = props => {
  const pinColor = "navy";
  return (
    <MapView style={styles.mapStyle} customMapStyle={mapStyle}>
      {props.markers.map((marker, index) => (
        <MapView.Marker
          key={index}
          coordinate={marker}
          pinColor={pinColor}
        ></MapView.Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: 420, //Dimensions.get("window").width,
    height: 780 //Dimensions.get("window").height
  }
});

export default Map;
