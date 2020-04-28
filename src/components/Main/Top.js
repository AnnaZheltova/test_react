import React, { Component } from 'react'

import './main.scss'


class Top extends Component {
    render() {
        return (
            <div className="top container-fluid p-0">
                <img className="card-img-top img-fluid" src={require('./Rectangle 8.png')} />
                <div className="card-img-overlay p-0">
                    <div className="row">
                        <div className="col-7 p-0">
                            <h1 className="logoTxt">AppCo</h1>
                            <h4><b>Brainstorming</b> for<br></br> desired perfect Usability</h4>
                            <p className="top-p1">Our design projects are fresh and simple and will benefit<br></br> your business greatly. Learn more about our work!</p>
                            <a href="/userstatistics" className="vstext btn bg-white">View Stats</a>
                        </div>
                        <div className="col-5 p-0">
                            <img className="iphone img-fluid" src={require('./mobile.png')} />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Top