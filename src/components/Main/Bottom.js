import React, { Component } from 'react'

import './main.scss'
import { Link } from 'react-router-dom'

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="input-group mx-auto">
                    <input type="text" className="form-control" placeholder="Enter your email" />
                    <button className="bottom-btn btn" type="button">Subscribe</button>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="bottomh1 mb-0">AppCo</h1>
                    </div>
                    <div className="col">
                        <p className="bottom-p mb-0">All rights reserved by ThemeTags</p>
                    </div>
                    <div className="col">
                        <p className="bottom-p mb-0">Copyrights © 2019.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Bottom