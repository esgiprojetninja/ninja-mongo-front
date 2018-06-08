import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from "recharts";
import { twits as twitsApi } from "../api";
import { getParsedData, getPieParsedData } from "../utils/parsers";


const TwittsBarChart = ({ loading, data }) => {
    if (loading) return <p>Loading...</p>;
    return (
        <BarChart width={1000} height={300} data={getParsedData(data).filter(row => row.name !== "Avg tweets" && row.name !== "Avg followers" && row.name !== "Avg favs")}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="Php" fill="#8884d8" />
        <Bar dataKey="Javascript" fill="#82ca9d" />
      </BarChart>
    )
}

const TwittsPieChart = ({loading, data, filter}) => {
    if (loading) return <p>Loading...</p>;
    return (
        <PieChart width={800} height={400}>
            <Pie isAnimationActive={false} data={getPieParsedData(data, filter)} fill="#8884d8" label dataKey="value" nameKey="name"/>
            <Tooltip/>
       </PieChart>
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
                <h1>Overall</h1>
                <TwittsBarChart loading={this.state.loading} data={this.state.data} />
                <h1>Average tweet total per user.</h1>
                <TwittsPieChart loading={this.state.loading} data={this.state.data} filter="avgAuthorTweetsNumber" />
                <h1>Average follower total per user.</h1>
                <TwittsPieChart loading={this.state.loading} data={this.state.data} filter="avgAuthorFollowers" />
                <h1>Average retweets.</h1>
                <TwittsPieChart loading={this.state.loading} data={this.state.data} filter="avgRetweet" />
                <h1>Average favs.</h1>
                <TwittsPieChart loading={this.state.loading} data={this.state.data} filter="avgAuthorFavorites" />
            </div>
        )
    }
}
