import React, { Component } from 'react'

import './main.scss'


class M3 extends Component {
    render() {
        return (
            <div className="M3 container-fluid">
                <h1 className="txt1"><b>Afforadble Pricing and Packages</b> <br></br>choose your best one</h1>
                <p className="txt1p">Monotonectally grow strategic process improvements vis-a-vis<br></br> integrated resources.</p>
                <div className="M3row row p-0">
                    <div className="card col text-center">
                        <h5 className="card-title">Basic</h5>
                        <img src={require('./undraw_online_test_gba7 1.png')} className="M3card-img card-img-top img-fluid mx-auto" alt="..." />
                        <div className="card-body">
                            <h3 className="M3card-h3">$29</h3>
                            <hr></hr>
                            <p className="M3card-text card-text">
                                Push Notifications<br></br>
                                Data Transfer<br></br>
                                SQL Database<br></br>
                                Search & SEO Analytics<br></br>
                                24/7 Phone Support<br></br>
                                2 months technical support<br></br>
                            2+ profitable keyword</p>       
                        </div>
                        <a href="#" className="M3btn btn">Purchase now</a>
                    </div>
                    <div className="card col text-center">
                        <h5 className="card-title">Standard</h5>
                        <img src={require('./undraw_file_sync_ot38 1.png')} className="M3card-img card-img-top img-fluid mx-auto" alt="..." />
                        <div className="card-body">
                            <h3 className="M3card-h3-2">$149</h3>
                            <hr></hr>
                            <p className="M3card-text card-text">Push Notifications<br></br>
                            Data Transfer<br></br>
                            SQL Database<br></br>
                            Search & SEO Analytics<br></br>
                            24/7 Phone Support<br></br>
                            2 months technical support<br></br>
                            2+ profitable keyword</p>                  
                        </div>
                        <a href="#" className="M3btn2 btn ">Purchase now</a>
                    </div>
                    <div className="card col text-center">
                        <h5 className="card-title">Unlimited</h5>
                        <img src={require('./undraw_quiz_nlyh 1.png')} className="M3card-img card-img-top img-fluid mx-auto" alt="..." />
                        <div className="card-body">
                            <h3 className="M3card-h3">$39</h3>
                            <hr></hr>
                            <p className="M3card-text card-text">Push Notifications<br></br>
                            Data Transfer<br></br>
                            SQL Database<br></br>
                            Search & SEO Analytics<br></br>
                            24/7 Phone Support<br></br>
                            2 months technical support<br></br>
                            2+ profitable keyword</p>
                        </div>
                        <a href="#" className="M3btn btn ">Purchase now</a>
                    </div>
                </div>
                <p className="M3bottom">If you need custom services or Need more? <b>Contact us</b></p>
            </div>

        )
    }
}
export default M3