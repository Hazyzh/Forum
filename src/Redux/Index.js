import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Header from './Header.js';
import Main from './Main.js';
import Title from './Title.js';
import Content from './Content.js';

class Index extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor () {
        super()
        this.state = { themeColor: 'red'}
        this.handleClick = this.handleClick.bind(this)
    }

    getChildContext() {
        return { themeColor: this.state.themeColor }
    }

    handleClick(){
        this.setState({
            themeColor: 'blue'
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Title />
                <Main>
                    <Content />
                </Main>
                <button onClick={this.handleClick} className='default-button'>click</button>
            </div>
        )
    }
}

export default Index;
