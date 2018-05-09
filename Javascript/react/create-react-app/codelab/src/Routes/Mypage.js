import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const logged = true;

class Mypage extends Component {
    render() {
        return (
            <div>
                { !logged && <Redirect to="/login" /> }
                My page
            </div>
        );
    }
}

export default Mypage;