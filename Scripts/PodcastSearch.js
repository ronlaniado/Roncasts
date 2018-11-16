const baseSearchUrl = "https://itunes.apple.com/search?";
const baseLookupUrl = "https://itunes.apple.com/lookup?";
const podcastID = "1435741177";

function rssToJSON(link) {
	//convert an rss feed url to a json link
	return link.replace(/rss/g, "json");
}
function concatLookupLink(baseUrl, id) {
	//Uses the base links to create a new link related to the podcast itself.
	return baseUrl + "id=" + id;
}

export { rssToJSON, concatLookupLink };
