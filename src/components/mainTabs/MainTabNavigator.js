import React, { Component } from "react";
import { View, Text } from "react-native";
import { TabNavigator } from "react-navigation";

import RecentTracksList from "./RecentTracksList";
import TopArtists from "./TopArtists";
import TopAlbums from "./TopAlbums";
import TopTracks from "./TopTracks";

export default TabNavigator(
  {
    "Recent Tracks": { screen: RecentTracksList },
    "Top Artists": { screen: TopArtists },
    "Top Albums": { screen: TopAlbums },
    "Top Tracks": { screen: TopTracks }
  },
  {
    tabBarOptions: {
      activeTintColor: "#c91818",
      inactiveTintColor: "#000",
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: { backgroundColor: "#c91818" }
    }
  }
);
