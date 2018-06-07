import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { twits as twitsApi } from "../api";

const TwittsBarChart = ({ loading, data }) => {
    if (loading) return <p>Loading...</p>;
    const parsedData = [
        {name: "Tweets", php: data.php.tweetsNumber, js: data.js.tweetsNumber},
        {name: "Avg tweets", php: data.php.avgAuthorTweetsNumber, js: data.js.avgAuthorTweetsNumber},
        {name: "Avg res", php: data.php.avgResponseToTweet, js: data.js.avgResponseToTweet},
        {name: "Avg retweet", php: data.php.avgRetweet, js: data.js.avgRetweet},
        {name: "Avg favs", php: data.php.avgAuthorFavorites, js: data.js.avgAuthorFavorites},
        {name: "Avg followers", php: data.php.avgAuthorFollowers, js: data.js.avgAuthorFollowers},
        {name: "Avg friends", php: data.php.avgAuthorFriends, js: data.js.avgAuthorFriends},
        {name: "Avg verified", php: data.php.avgFamousAuthors, js: data.js.avgFamousAuthors},
    ];
    return (
        <BarChart width={1000} height={300} data={parsedData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="php" fill="#8884d8" />
        <Bar dataKey="js" fill="#82ca9d" />
      </BarChart>
    )
}


export default class Stats extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        twitsApi.getStats().then(
            response => this.setState({
                data: response,
                loading: false
            }),
            error => this.setState({
                error,
                loading: false
            })
        )
    }

    render () {
        return (
            <div>
                <h1>Stats</h1>
                <TwittsBarChart loading={this.state.loading} data={this.state.data} />
            </div>
        )
    }
}
