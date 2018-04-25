import React from 'react';
import ReactDOM from 'react-dom';

// import {SubComponent} from './sub-component';
import {ListComponent} from './list-component';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    name: "react"
                },
                {
                    id: 2,
                    name: "django"
                }
            ]
        }
    }

  render() {
    return (
      <div>
        <h1>My Todos</h1>
        {/*<SubComponent name="My Counter for Babel" />*/}
        <ListComponent todos={this.state.todos}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));