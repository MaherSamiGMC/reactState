import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={number:0,counter:0}
    }
    componentDidMount(){
        setInterval(()=>this.setState({...this.state,counter:this.state.counter+1}),1000)
        
    }
    componentDidUpdate(){
        console.log('component did update')

    }
    componentWillUnmount(){
        console.log('component will unmount')

    }
    render() {
        console.log('rendring')
        return (
            <div>
                <button onClick={()=>this.state.number>1 && this.setState({...this.state,number:this.state.number-1})}> - </button>
                <div> {this.state.number} </div>
                <button onClick={()=>this.setState({...this.state,number:this.state.number+1})}> + </button>
                <div> {this.state.counter}</div>
            </div>
        )
    }
}
