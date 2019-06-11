import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications, {notify} from '../components/Notifications';

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
        var style = {
            color: 'red'           
          };
        return (<div>
            <h1>
                Home Page {count}</h1>
                <button onClick={()=>notify('JONE')}>Click me jone</button>
                <Notifications />
                <button className="btn btn-success" style={style} onClick={this.btnIncrementCounter}>Counter++</button>
            
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