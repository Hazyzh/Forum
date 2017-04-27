import React, { Component } from 'react';

export default (WappendComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {data: null}
        }

        componentWillMount() {
            let data = localStorage.getItem(name)
            try {
                this.setState({data: JSON.parse(data)})
            } catch (e) {
                this.setState({ data })
            }
        }

        render() {
            return <WappendComponent data={this.state.data} />
        }
    }

    return NewComponent;
}
