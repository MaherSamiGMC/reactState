import React, { Component } from 'react'
import ClassComponent from './component/ClassComponent'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:true}
  }
  render() {
    return (
      <div>
        {this.state.show && <ClassComponent name="selim"/>}
        <button onClick={()=>this.setState({show:!this.state.show})}>show | hide </button>
      </div>
    )
  }
}
