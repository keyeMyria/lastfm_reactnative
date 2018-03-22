import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { formatDate } from "../../helpers/dataFormat";

const RecentTracksItem = props => {
  const { track } = props;

  const artistName = Object.values(track.artist)[0];

  let date = "";
  if (track.date != undefined) {
    date = Object.values(track.date)[1];
  } else {
    date = "Now Playing";
  }

  let imageSource = "";
  if (Object.values(track.image[2])[0] != "") {
    imageSource = Object.values(track.image[2])[0];
  } else {
    imageSource = "http://via.placeholder.com/100x100";
  }

  const styles = {
    listItem: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#c4c5c6"
    },
    listItemNowPlaying: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#c4c5c6",
      backgroundColor: "#ffe9ba"
    },
    image: {
      height: 100,
      width: 100
    },
    textGroup: {
      justifyContent: "center",
      marginLeft: 10
    },
    title: {
      fontSize: 20
    },
    artist: {
      fontSize: 15
    }
  };

  return (
    <View
      style={[
        date == "Now Playing" ? styles.listItemNowPlaying : styles.listItem
      ]}
    >
      <Image style={styles.image} source={{ uri: imageSource }} />
      <View style={styles.textGroup}>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.artist}>{artistName}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default RecentTracksItem;
