import React, { Component } from 'react';
import WrappedComponent from '../../higherOrderCompentent/WrappedComponent';


class ForTest extends Component {
    render() {
        return (<input type="text" placeholder={this.props.data} />)
    }
}

export default WrappedComponent(ForTest, 'username');
