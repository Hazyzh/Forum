import React, { Component } from 'react';

export default (WappendComponent, name) => {
    class LocalStorageActions extends Component {
        constructor() {
            super()
            this.state = {
                data: ''
            }
        }

        componentWillMount() {
            let data = localStorage.getItem(name)
            try {
                this.setState({data: JSON.parse(data)})
            } catch (e) {
                this.setState({ data })
            }
        }

        saveDate(data) {
            try{
                localStorage.setItem(name, JSON.stringify(data))
            } catch (e) {
                localStorage.setItem(name, `${data}`)
            }
        }

        render() {
            return (
                <WappendComponent
                    data={this.state.data}
                    saveDate={this.saveDate}
                    {...this.props} />
            )
        }
    }

    return LocalStorageActions;
}
