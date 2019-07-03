import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const url = "https://fosteman-mongo-backend.herokuapp.com/";
class TeamsPanel extends Component {
    constructor() {
        super()
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get(url + 'teams')
            .then(res => {
                const teams = res.data;
                this.setState({
                    teams
                });
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr>
                                            <td key={index}>{team.TeamName  }</td>
                                            <td key={index}>{team.Employees.length} Employees</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                </div>
            </div>
        );
    }
}

export default TeamsPanel;
