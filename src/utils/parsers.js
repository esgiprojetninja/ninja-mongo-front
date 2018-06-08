export const getParsedData = data => [
  {
    name: "Tweets",
    Php: Math.round(data.Php.tweetsNumber),
    Javascript: Math.round(data.Javascript.tweetsNumber)
  },
  {
    name: "Avg tweets",
    Php: Math.round(data.Php.avgAuthorTweetsNumber),
    Javascript: Math.round(data.Javascript.avgAuthorTweetsNumber)
  },
  {
    name: "Avg retweet",
    Php: Math.round(data.Php.avgRetweet),
    Javascript: Math.round(data.Javascript.avgRetweet)
  },
  {
    name: "Avg favs",
    Php: Math.round(data.Php.avgAuthorFavorites),
    Javascript: Math.round(data.Javascript.avgAuthorFavorites)
  },
  {
    name: "Avg followers",
    Php: Math.round(data.Php.avgAuthorFollowers),
    Javascript: Math.round(data.Javascript.avgAuthorFollowers)
  },
  {
    name: "Avg friends",
    Php: Math.round(data.Php.avgAuthorFriends),
    Javascript: Math.round(data.Javascript.avgAuthorFriends)
  },
  {
    name: "Avg verified",
    Php: Math.round(data.Php.avgFamousAuthors),
    Javascript: Math.round(data.Javascript.avgFamousAuthors)
  }
];

export const getPieParsedData = (data, filter) => [
  { name: "Php", value: Math.round(data.Php[filter]) },
  { name: "Javascript", value: Math.round(data.Javascript[filter]) }
];

export const getParsedLanguageData = (data, filter) => {
  const languages = data[filter].tweetsPerLanguage;
  const parsedData = [];
  for (let language in languages) {
    parsedData.push({
      name: language,
      value: languages[language]
    });
  }
  return parsedData;
};
