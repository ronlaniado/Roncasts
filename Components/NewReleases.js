import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import Ripple from "react-native-material-ripple";
import { sendGetRequest } from "../Scripts/Utils";
import { rssToJSON, concatLookupLink } from "../Scripts/PodcastSearch";

export default class NewReleases extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			errored: false,
			data: null,
			result: "",
		};
	}

	componentWillMount() {
		prostheticThis = this;
		sendGetRequest(
			"https://www.hellointernet.fm/podcast?format=json",
			function(results) {
				console.log(results);
				this.setState({ result: results.feedUrl });
			}
		);
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.title}>
					New releases {this.state.result}
				</Text>
				<ListItem
					podcastName="Cortex"
					podcastTitle="Cortex 76: PREPARE FOR CORTEX"
					podcastUrl="https://relayfm.s3.amazonaws.com/uploads/broadcast/image/17/broadcast_artwork_cortex_artwork.png"
				/>
				<ListItem
					podcastName="Hello Internet"
					podcastTitle="Consistency Hobglobins"
					podcastUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hello_Internet_Logo.svg/220px-Hello_Internet_Logo.svg.png"
				/>
				<ListItem
					podcastName="Code Newbie"
					podcastTitle="S6:E5 - Should you start freelancing?"
					podcastUrl="http://static.pocketcasts.com/discover/images/200/b3b59a90-20b7-0132-b457-5f4c86fd3263.jpg"
				/>
				<ListItem
					podcastName="The freeCodeCamp Podcast"
					podcastTitle="Erica Peterson, founder, entrepreneur..."
					podcastUrl="http://static.pocketcasts.com/discover/images/200/660c9e20-ad36-0135-9e5c-5bb073f92b78.jpg"
				/>
			</ScrollView>
		);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<Ripple style={styles.podcastContainer}>
				<Image
					style={styles.podcastPic}
					source={{ uri: this.props.podcastUrl }}
				/>
				<View style={styles.podcastInfo}>
					<Text style={styles.podcastName}>
						{this.props.podcastName}
					</Text>
					<Text style={styles.podcastTitle}>
						{this.props.podcastTitle}
					</Text>
				</View>
				<Icon
					iconStyle={styles.downloadIcon}
					name="chevron-with-circle-down"
					type="entypo"
					size={30}
				/>
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
		marginLeft: 5,
	},
	downloadIcon: {
		paddingRight: 10,
	},
	podcastContainer: {
		paddingTop: 8,
		paddingBottom: 8,
		flexDirection: "row",
		paddingLeft: 5,
	},
	podcastInfo: {
		flex: 1,
	},
	podcastPic: {
		width: 65,
		height: 65,
	},
	podcastName: {
		fontWeight: "bold",
		fontSize: 20,
		paddingLeft: 10,
		paddingTop: 10,
	},
	podcastTitle: {
		fontSize: 14,
		paddingLeft: 10,
	},
});
