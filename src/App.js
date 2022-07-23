import TextField from './components/forms/TextField/TextField';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <section style={{ backgroundColor: 'blue', color: 'white' }}>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </section>
        <section>
          <p>
            <span>Try it free 7 days</span>
            then $20/mo. thereafter
          </p>
        </section>
        <section>
          <TextField />
        </section>
      </div>
    );
  }
}

export default App;
