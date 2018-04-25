import React from 'react';
import ReactDOM from 'react-dom';

// import {SubComponent} from './sub-component';
import {ListComponent} from './list-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todos</h1>
        {/*<SubComponent name="My Counter for Babel" />*/}
        <ListComponent/>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));