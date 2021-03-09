import React, { Component } from 'react'
import {UserConsumer} from './Context'
export class ComponentF extends Component {
    render() {
        return (
            <div>
                the below output is from ComponentF
              <UserConsumer>
                  {
                     (value) => {return<h1>{value}</h1>}
                  }
              </UserConsumer>
                
            </div>
        )
    }
}

export default ComponentF
