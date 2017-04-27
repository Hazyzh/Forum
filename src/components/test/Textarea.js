import React, { Component } from 'react';
import WrappedComponent from '../../higherOrderCompentent/WrappedComponent.js';

class Textarea extends Component {
    render() {
        return (<ol>{this.props.data.map((val, i) => <li key={i}>{val.username}</li>)}</ol>)
    }
}

export default WrappedComponent(Textarea, 'commentlist');
