import './App.css';
import React from 'react'
class App extends React.Component {

    constructor() {
        super();
        console.warn('constructor')
        this.state={
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot) 
    {
        console.warn('componentDidUpdate',preState)
    }
    render() {
        console.warn("render")
        
        return (
            <div className="App">
                <h1>Component Did Mount{this.state.count}</h1>
                <button onClick={()=> {this.setState({count:this.state.count+1})}}>Update Name</button>
            </div>
        );
    }
}

export default App;