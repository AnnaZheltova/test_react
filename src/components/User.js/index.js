import React, { Component } from 'react'
import './user.scss'

import { Chart, Line } from 'react-chartjs-2';


class User extends Component {

    constructor() {
        super();
        this.state = {
            usrstat: [],
            from: '',
            to: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.getUser = this.getUser.bind(this);
        this.getLabels = this.getLabels.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getClicks = this.getClicks.bind(this);


    }


    handleSubmit(event) {
        if (this.input2.current.value >= this.input1.current.value) {
            this.setState({ from: this.input1.current.value })
            this.setState({ to: this.input2.current.value })
        }

        else {
            alert('Date To need to be greater then From')
        }


        event.preventDefault();
    }

    getUsers(id) {
        fetch('http://localhost:8000/api/users_statistic/' + id)
            .then(response => response.json())
            .then(usrstat => (this.setState({ usrstat })))

    }
    getUser(id) {
        this.getUsers(id);
        return this.state.usrstat
    }

    getLabels(users) {
        let labelsArr = [];

        users.map((usr, index) =>
            this.state.from != '' & this.state.to != '' ?
                (usr.date >= this.state.from) & (usr.date <= this.state.to) ?
                    labelsArr.push(usr.date)
                    :
                    labelsArr
                :
                index < 7 ?
                    labelsArr.push(usr.date)
                    :
                    labelsArr
        )
        return labelsArr
    }
    getClicks(users) {

        let labelsArr = []
        users.map((usr, index) =>
            this.state.from != '' & this.state.to != '' ?
                (usr.date >= this.state.from) & (usr.date <= this.state.to) ?
                    labelsArr.push(usr.clicks)
                    :
                    labelsArr
                :
                index < 7 ?
                    labelsArr.push(usr.clicks)
                    :
                    labelsArr

        )
        return labelsArr
    }
    getViews(users) {
        let labelsArr = []
        users.map((usr, index) =>
            this.state.from != '' & this.state.to != '' ?
                (usr.date >= this.state.from) & (usr.date <= this.state.to) ?
                    labelsArr.push(usr.page_views)
                    :
                    labelsArr
                :
                index < 7 ?
                    labelsArr.push(usr.page_views)
                    :
                    labelsArr

        )
        return labelsArr
    }


    render() {
        let url = this.props.match.params.id;
        url = url.replace('name', '');
        let id = url.split('=')[1];
        let name = url.split('=')[2];

        let users = this.getUser(id);
        let labelsArr = this.getLabels(users);
        let clickArr = this.getClicks(users);
        let viewArr = this.getClicks(users);
        let state = {}
        if (labelsArr != [] & clickArr != []) {
            Chart.defaults.global.legend.display = false
            state = {
                labels: labelsArr,
                datasets: [
                    {
                        fill: false,
                        backgroundColor: '#3A80BA',
                        borderColor: '#3A80BA',
                        borderWidth: '4',
                        labels: {
                            display: false
                        },
                        data: clickArr,
                        pointRadius: function (context) {
                            var index = context.dataIndex;
                            return index == 0 || index == context.dataset.data.length - 1 ? '8' :
                                '0';
                        },
                        legend: {
                            labels: {
                                backgroundColor: '#F1F1F1',
                                fontColor: '#CCCCCC',
                                fontStyle: "normal",
                                fontWeight: 'normal',
                                fontSize: '16px',
                                lineHeight: '142%',
                            }
                        }

                    }
                ]
            }
        }

        let views = {}
        if (labelsArr != [] & viewArr != []) {
            Chart.defaults.global.legend.display = false
            views = {
                labels: labelsArr,
                datasets: [
                    {
                        fill: false,
                        backgroundColor: '#3A80BA',
                        borderColor: '#3A80BA',
                        borderWidth: '4',
                        labels: {
                            display: false
                        },
                        data: viewArr,
                        pointRadius: function (context) {
                            var index = context.dataIndex;
                            return index == 0 || index == context.dataset.data.length - 1 ? '8' :
                                '0';
                        },
                        legend: {
                            labels: {
                                backgroundColor: '#F1F1F1',
                                fontColor: '#CCCCCC',
                                fontStyle: "normal",
                                fontWeight: 'normal',
                                fontSize: '16px',
                                lineHeight: '142%',
                            }
                        }

                    }
                ]
            }
        }

        return (
            <div>
                <div className="min-vh-100">
                    <div className="usrs-top">
                        <h1>AppCo</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="mainpage" href="/">Main page</a></li>
                            <li className="breadcrumb-item"><a className="mainpage" href="/userstatistics">User satistics</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{name}</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <h1 className="name1 col-4">{name}</h1>
                        <form className="col-6 d-flex" onSubmit={this.handleSubmit}>
                            <label className="my-auto mr-1" htmlFor="from">from</label>
                            <input id="from" className="from col mr-2" type="date" ref={this.input1}></input>
                            <label className="my-auto mr-1" htmlFor="to">to</label>
                            <input id="to" className="to col mr-2" type="date" ref={this.input2} ></input>
                            <button className="btn btn-primary col" type="submit">choose</button>
                        </form>

                    </div>

                    <h3 className="nameClicks">Clicks</h3>
                    <div className="chart container-fluid mx-auto">
                        <Line
                            data={state}
                            options={{
                                responsive: true,

                                bezierCurve: true,
                                scaleSteps: '49px',
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display: false,
                                        }
                                    }]
                                },

                            }}
                        />

                    </div>

                    <h3 className="nameViews">Views</h3>
                    <div className="chart container-fluid mx-auto">
                        <Line
                            data={views}
                            options={{
                                responsive: true,
                                bezierCurve: true,
                                scaleSteps: '49px',
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            display: false,
                                        }
                                    }]
                                },

                            }}
                        />

                    </div>
                </div>
                <div className="usr">
                    <div className="usr_bottom">
                        <div className="row">
                            <div className="col">
                                <h1 className="bottomh1 mb-0">AppCo</h1>
                            </div>
                            <div className="col">
                                <p className="bottom-p mb-0 text-left">All rights reserved by ThemeTags</p>
                            </div>
                            <div className="col">
                                <p className="bottom-p mb-0">Copyrights © 2019.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )

    }
}
export default User
