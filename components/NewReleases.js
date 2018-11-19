import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import Ripple from "react-native-material-ripple";

export default class NewReleases extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      errored: false,
      data: [],
      result: ""
    };
  }

  componentWillMount() {
    fetch("https://www.hellointernet.fm/podcast?format=json")
      .then(response => {
        const body = JSON.parse(response._bodyText);

        this.setState(prevState => ({
          data: [
            ...prevState.data,
            {
              title: body.website.siteTitle,
              episode: body.items[1].title,
              image: body.items[0].assetUrl
            }
          ]
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>New releases {this.state.result}</Text>
        {this.state.data.map(pod => (
          <PodcastListItem
            title={pod.title}
            episode={pod.episode}
            image={pod.image}
            key={`${pod.title}/${pod.episode}`}
          />
        ))}
      </ScrollView>
    );
  }
}

class PodcastListItem extends React.Component {
  render() {
    return (
      <Ripple style={styles.podcastContainer}>
        <Image style={styles.podcastPic} source={{ uri: this.props.image }} />
        <View style={styles.podcastInfo}>
          <Text style={styles.podcastName}>{this.props.title}</Text>
          <Text style={styles.podcastTitle}>{this.props.episode}</Text>
        </View>
        <Icon iconStyle={styles.downloadIcon} name="chevron-with-circle-down" type="entypo" size={30} />
        <View />
      </Ripple>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 35,
    marginTop: 55,
    marginBottom: 20,
    marginLeft: 5
  },
  downloadIcon: {
    paddingRight: 10
  },
  podcastContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: "row",
    paddingLeft: 5
  },
  podcastInfo: {
    flex: 1
  },
  podcastPic: {
    width: 65,
    height: 65
  },
  podcastName: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10
  },
  podcastTitle: {
    fontSize: 14,
    paddingLeft: 10
  }
});
