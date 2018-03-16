import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  RefreshControl
} from "react-native";
import { connect } from "react-redux";

import { getRecentTracks } from "../actions/RecentTracksAction";
import RecentTracksItem from "./RecentTracksItem";

class RecentTracksList extends Component {
  componentDidMount() {
    this.props.getRecentTracks();
  }

  onPress() {
    this.props.getRecentTracks();
  }

  onRefresh() {
    this.props.getRecentTracks();
  }

  renderTracks() {
    if (this.props.recentTracks.recentTracks == undefined) {
      return;
    }

    return this.props.recentTracks.recentTracks.map((track, index) => (
      <RecentTracksItem key={index} track={track} />
    ));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.titleStyle}>Recently Played Tracks</Text>
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.loadingRecentTracks || false}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        >
          {this.renderTracks()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: "center",
    fontSize: 20,
    margin: 10
  },
  listItem: {
    margin: 10
  }
});

const mapStateToProps = ({ recentTracks, loadingRecentTracks }) => {
  return { recentTracks, loadingRecentTracks };
};

export default connect(mapStateToProps, { getRecentTracks })(RecentTracksList);
