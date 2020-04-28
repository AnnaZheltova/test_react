import React, { Component } from 'react'

import './main.scss'


class M1 extends Component {
    render() {
        return (
            <div className="container-fluid mt-2">
                <h1 className="txt1">Why <b>small business owners<br></br> love</b> AppCo? </h1>
                <p className="txt1p">Our design projects are fresh and simple and will benefit your business<br></br> greatly. Learn more about our work!</p>
                <div className="M1row row">
                    <div className="card col text-center">
                        <img src={require("./Vector.png")} className="M1card-img card-img-top img-fluid " alt="..." />
                        <img src={require('./035   Creative Thinking.png')}  className="M1card-img2 card-img-overlay img-fluid p-0 z2" />
                        <div className="card-body p-0">
                            <h5 className="card-title">Clean Design</h5>
                            <p className="card-text">Increase sales by showing true dynamics of your website.</p>
                        </div>
                    </div>
                    <div className="card col text-center">
                    <img src={require("./Vector.png")} className="M1card-img card-img-top img-fluid " alt="..." />
                        <img src={require('./027   Secure.png')}  className="M1card-img2 card-img-overlay img-fluid p-0 z2" />
                        <div className="card-body p-0">
                            <h5 className="card-title">Secure Data</h5>
                            <p className="card-text">Build your online store’s trust using Social Proof & Urgency.</p>
                        </div>
                    </div>
                    <div className="card col text-center">
                    <img src={require("./Vector.png")} className="M1card-img card-img-top img-fluid " alt="..." />
                        <img src={require('./Group.png')}  className="M1card-img2 card-img-overlay img-fluid p-0 z2" />
                        <div className="card-body p-0">
                            <h5 className="card-title">Retina Ready</h5>
                            <p className="card-text">Realize importance of social proof in customer’s purchase decision.</p>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}
export default M1