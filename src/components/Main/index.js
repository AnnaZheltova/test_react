import React, { Component } from 'react'
import './main.scss'
import Top from './Top'
import M1 from './M1'
import M2 from './M2'
import M3 from './M3'
import Bottom from './Bottom'

class Main extends Component {
    render() {
        return (
            <div>
                <Top/>
                <M1/>
                <M2/>
                <M3/>
                <Bottom/>
            </div>
            
        )
    }
}
export default Main