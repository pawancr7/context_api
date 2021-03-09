import React, { Component } from 'react'
import ComponentF from './ComponentF'
import {UserContext} from './Context'

export class ComponentE extends Component {
    render() {
        return (
            <div>
                ComponentE = <h3>{this.context}</h3>
                 <ComponentF />
            
                
            </div>
        )
    }
}
ComponentE.contextType = UserContext
export default ComponentE
