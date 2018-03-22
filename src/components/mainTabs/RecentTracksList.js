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

import { getRecentTracks } from "../../actions/RecentTracksAction";
import RecentTracksItem from "./RecentTracksItem";

class RecentTracksList extends Component {
  componentDidMount() {
    this.props.getRecentTracks(this.props.user.user);
  }

  onRefresh = () => {
    this.props.getRecentTracks(this.props.user.user);
  };

  renderTracks = () => {
    if (this.props.recentTracks.recentTracks === undefined) {
      return;
    }

    return this.props.recentTracks.recentTracks.map((track, index) => (
      <RecentTracksItem key={index} track={track} />
    ));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.loadingRecentTracks || false}
              onRefresh={this.onRefresh}
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

const mapStateToProps = ({ recentTracks, loadingRecentTracks, user }) => {
  return { recentTracks, loadingRecentTracks, user };
};

export default connect(mapStateToProps, { getRecentTracks })(RecentTracksList);
