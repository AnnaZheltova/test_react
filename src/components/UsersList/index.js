import React, { Component } from 'react'
import './usrlist.scss'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import User from '../User.js'
import { Redirect } from 'react-router-dom';


class UsersList extends Component {
    constructor() {
        super();
        this.state = {
            user: [], currentPage: 0, users: [], usrsstat: []
        };
        this.Clicks = this.Clicks.bind(this);
        this.Page_views = this.Page_views.bind(this);
        this.pageChangeHandler = this.pageChangeHandler.bind(this);
        this.GetUsers = this.GetUsers.bind(this);
        this.onRowSelect = this.onRowSelect.bind(this)

        // fetch('http://localhost:8000/api/users')
        //     .then(response => response.json())
        //     .then(users => (this.setState({ users })))

        // fetch('http://localhost:8000/api/users_statistic')
        //     .then(response => response.json())
        //     .then(usrsstat => (this.setState({ usrsstat })))

    }
    componentDidMount() {
        fetch('http://localhost:8000/api/users')
            .then(response => response.json())
            .then(users => (this.setState({ users })))

        fetch('http://localhost:8000/api/users_statistic')
            .then(response => response.json())
            .then(usrsstat => (this.setState({ usrsstat })))

    }

    Clicks(id) {

        let usr_stat = this.state.usrsstat.find(usr => usr.user_id === id);
        if (usr_stat !== undefined) {
            return (usr_stat.clicks)
        }

    }
    Page_views(id) {

        let usr_stat = this.state.usrsstat.find(usr => usr.user_id === id);
        if (usr_stat !== undefined) {
            return (usr_stat.page_views)
        }

    }
    pageChangeHandler = ({ selected }) => (
        this.setState({ currentPage: selected })
    )
    GetUsers() {
        let usrs = this.state.users.slice((this.state.currentPage) * 50, (this.state.currentPage) * 50 + 50);
        return usrs
    }
    onRowSelect = row => (
        this.setState({ user: row }),
        window.location.assign(`/user/:id=${row.id}name=${row.first_name} ${row.last_name}`)
    )



    render() {
        const pageSize = 50;
        return (

            <div>
                <div className="usrs-top">
                    <h1>AppCo</h1>
                </div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="mainpage" href="/">Main page</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User statistics</li>
                    </ol>
                </nav>
                <h1 className="usr-stat">Users statistics</h1>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped w-auto">
                        <thead className="">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">IP adress</th>
                                <th scope="col">Total clicks</th>
                                <th scope="col">Total page views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.GetUsers().map(user =>
                                    <tr key={user.id} onClick={this.onRowSelect.bind(null, user)}>
                                        <td>
                                            {user.id}

                                        </td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.ip_address}</td>
                                        <td>{this.Clicks(user.id)}</td>
                                        <td>{this.Page_views(user.id)}</td>
                                    </tr>

                                )

                            }
                        </tbody>
                    </table>

                </div>
                <div className="container-fluid mx-auto">
                    {
                        this.state.users.length > pageSize
                            ? <ReactPaginate
                                previousLabel={"⟨"}
                                nextLabel={'⟩'}
                                breakLabel={''}
                                breakClassName={''}
                                pageCount={Math.ceil(this.state.users.length / pageSize)}
                                marginPagesDisplayed={0}
                                pageRangeDisplayed={4}
                                onPageChange={this.pageChangeHandler}
                                containerClassName={'pagination text-center'}
                                activeClassName={'active'}
                                pageClassName="page-item mx-1"
                                pageLinkClassName="page-link mx-auto"
                                previousClassName="page-item"
                                nextClassName="page-item"
                                previousLinkClassName="page-link"
                                nextLinkClassName="page-link"
                                forcePage={this.state.currentPage}
                            /> : null
                    }

                </div>

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

        )
    }
}
export default UsersList