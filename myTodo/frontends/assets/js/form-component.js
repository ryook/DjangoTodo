import React from 'react';

export class FormComponent extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.addTask}>
                <input name='name' type='text' placeholder='new task'/>
                <button type='submit'>create</button>
            </form>
        )
    }
}