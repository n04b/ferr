import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
import { connect } from 'react-firebase';




/*
const Counter = ({ value, setValue }) => (
    <div>
        <button onClick={() => setValue(value - 1)}>-</button>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)}>+</button>
    </div>
);

const Fb = connect((props, ref) => ({
    value: 'test',
    setValue: value => ref('test').set(value)
}))(Counter)

*/

// firebaseApp.database().ref().once('value', snap => { console.log(snap.val()) });




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
