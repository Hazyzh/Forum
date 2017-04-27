import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

class Title extends Component {
    render () {
        return (<h1>React小书</h1>);
    }
}

class Header extends Component {
    constructor (props) {
        super(props);

        this.state = {
            good: true
        }
    }

    clickHandler () {
        this.setState({
            good: !this.state.good,
        })
    }

    render () {
        let title = 'is goods !';
        let good = this.state.good;
        return (
            <div>
                <Title title={title}/>
                <p title={title}>{good ? <span>goods</span> : <span> not goods</span>}</p>
                <button onClick={() => this.clickHandler()}>button</button>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (<div><h2>This is main content </h2></div>)
    }
}

class Footer extends Component {
    render () {
        return (<div><h2>This is footer</h2></div>)
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
