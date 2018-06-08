import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { twits as twitsApi } from "../api";
import { getParsedData, getParsedLanguageData } from "../utils/parsers";

const getRandomColor = () => "#"+Math.floor(Math.random()*16777215).toString(16);


const LanguagesStats = ({data, filter}) => {
    const parsedData = getParsedLanguageData(data, filter);
    return (
        <PieChart width={800} height={400}>
            <Pie
            data={parsedData}
            cx={300}
            cy={200}
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            >
                {
                parsedData.map((entry, index) => <Cell key={entry.name} fill={getRandomColor()}/>)
            }
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

const StatRows = ({data, filter}) => (
        <div className="row">
            {getParsedData(data).map(stat => (
                <div className="col-4 stat-box" key={stat.name}>
                    <div className="card border border-primary">
                        <div className="card-body">
                            <h5 className="card-title">{stat.name}</h5>
                            <h3 className="text-primary">{stat[filter]}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
)

export default class SpecificStats extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        twitsApi.getStats().then(
            response => this.setState({
                loading: false,
                data: response
            })
        );
    }

    render() {
        if (this.state.loading) return <p>Loading...</p>;
        return (
            <div>
                <StatRows data={this.state.data} filter={this.props.filter} />
                <LanguagesStats data={this.state.data} filter={this.props.filter} />
            </div>
        );
    }
}