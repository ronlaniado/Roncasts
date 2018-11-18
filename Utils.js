const baseSearchUrl = "https://itunes.apple.com/search?";
const baseLookupUrl = "https://itunes.apple.com/lookup?";
const podcastID = "1435741177";

/**
 * @description converts links with the RSS format to JSON format
 * @param {string} link
 */
function rssToJSON(link) {
  return link.replace(/rss/g, "json");
}

/**
 * @description uses the base links to create a new link related to the podcast itself
 * @param {string} baseUrl
 * @param {string} id
 */
function concatLookupLink(baseUrl, id) {
  return baseUrl + "id=" + id;
}

export { rssToJSON, concatLookupLink };
