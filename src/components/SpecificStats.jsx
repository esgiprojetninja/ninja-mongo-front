import React from "react";
import { twits as twitsApi } from "../api";
import { getParsedData } from "../utils/parsers";

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
        return <StatRows data={this.state.data} filter={this.props.filter} />;
    }
}