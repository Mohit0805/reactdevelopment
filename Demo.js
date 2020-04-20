import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';

const Demo = (props) => {
    return <div className="maindiv">
            <h1>Hello World!</h1>
            <h1>Welcome to my channel, {props.name}</h1>
        </div>
}

/*class Demo extends Component{
    render(){
        return <div className="maindiv">
            <h1>Hello World!</h1>
            <h1>Welcome to my channel, {this.props.name}</h1>
        </div>
    }
}*/

export default Demo;