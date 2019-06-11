import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../components/Notifications';

class Home extends Component {
    state = {}
    btnIncrementCounter = (e) => {
        e.preventDefault();
        this.props.dispatch({ type: "INCREMENT" });
        console.log('Hello click');
    }
    render() {
        console.log('-----Home props----', this.props);
        const { count } = this.props;
        return (<div>
            <h1>
                Home Page {count}</h1>
                <Notifications />
                <button className="btn btn-success" onClick={this.btnIncrementCounter}>Counter++</button>
            
        </div>);
    }
}

const mapStateProps = (state) => {
    console.log('----redux store connect----', state);
    return {
        count: state.counter.counterStore
    };
}
export default connect(mapStateProps)(Home);