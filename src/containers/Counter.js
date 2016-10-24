import React, { Component } from 'react'
import { connect } from 'react-redux';

import CountDisplay from './../components/CountDisplay';
import IncrementButton from './../components/IncrementButton';

import { incrementCounter } from './../actions/counterActions';

class Counter extends Component {
    render() {
        return (
            <main>
                <h1>Hi, I'm counting:</h1>
                <CountDisplay count={this.props.count} />
                <IncrementButton onClick={this.props.incrementCounter} />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(
    mapStateToProps,
    { incrementCounter }
)(Counter);
