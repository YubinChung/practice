import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const username = this.props.match.params.username
        return (
            <div>
                {username}'s About
            </div>
        );
    }
}

export default About;