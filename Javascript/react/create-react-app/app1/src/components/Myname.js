import React, { Component } from 'react';

class Myname extends Component {
    static defaultProps = {
        name : '기본이름'
    }
    render() {
        return (
            <div>하이, 내 이름은 <strong>{ this.props.name }</strong>이란다.</div>
        )
    }
}

export default Myname;
