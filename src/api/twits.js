import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:3001";

/**
 * Generate a fetch with the provided options.
 * @async
 * @param {object} options - The options to generate the request.
 * @param {string} options.url - The url's request.
 * @param {string} [option.verb=GET] - The HTTP verb used.
 * @param {object} option.body - The object to be serialized as the request's body.
 * @param {bool} option.https - Whether or not the request uses HTTPS.
 * @param {object} options.headers - The request's headers.
 * @returns {Promise} - A promise.
 */
async function generateFetch({
  url,
  verb = "GET",
  data,
  headers,
  withAuth = true
}) {
  const options = {
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers
    }
  };
  if (data) {
    options.data = data;
  }
  try {
    const res = await axios(`${BASE_API_URL}/${url}`, options);
    return res.data;
  } catch (error) {
    throw error.response;
  }
}

export default {
  getTwitts: () =>
    generateFetch({
      url: "tweets/"
    }),
  getStats: () =>
    generateFetch({
      url: "tweets/stats/"
    })
};
