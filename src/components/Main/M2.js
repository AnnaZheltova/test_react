import React, { Component } from 'react'

import './main.scss'


class M2 extends Component {
    render() {
        return (
            <div className="M2 container-fluid">
                <div className="row">
                    <div className="col-5">
                        <h4 className="M2h4"> Start Managing your apps<br></br> business, more faster</h4>
                        <p className="M2p">Objectively deliver professional value with diverse web-readiness.<br></br> Collaboratively transition wireless customer service without<br></br> goal-oriented catalysts for change. Collaboratively. </p>
                        <a href="#" className="M2btn btn bg-white">Learn more</a>
                    </div>
                    <div className="col-7">
                        <img className="macbook img-fluid" src={require('./macbook.png')} />
                    </div>
                </div>
            </div>

        )
    }
}
export default M2