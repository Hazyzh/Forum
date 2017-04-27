import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Header extends Component {
    
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render() {
        const colorStyle = {
            color: this.context.themeColor
        }
        return (
            <div style={colorStyle}>This is a Header box</div>
        )
    }
}

export default Header;
