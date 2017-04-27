import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>This is a Main box</h1>
                <div
                    style={{padding: '20px',
                            marginLeft: '50px',
                            border: '1px solid #eee'}} >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;
